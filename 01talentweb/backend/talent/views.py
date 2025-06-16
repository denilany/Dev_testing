"""
Views for the Talent app.

This module provides endpoints for listing and managing talent data.

Key Views:
- talents_list: Returns a list of all talents for the frontend, including id, email, name, profile (with role, bio, skills, etc.), and created_at fields. The data is formatted for Inertia.js and is used to render talent profiles in the frontend.

Additional endpoints can be added here to support CRUD operations or custom queries for the Talent model.
"""

from django.db.models import Q
from django.shortcuts import get_object_or_404
from inertia import inertia
from .models import Talent

@inertia('Talent/Index')
def talents_list(request):
    search_query = request.GET.get('q', '').strip()
    role_filter = request.GET.get('role', '').strip()
    talents = Talent.objects.all()
    
    # Apply role filter if specified
    if role_filter:
        talents = talents.filter(profile__role=role_filter)
    
    if search_query:
        # Search in name field
        name_query = Q(name__icontains=search_query)
        
        # Search in JSON fields
        profile_query = (
            Q(profile__bio__icontains=search_query) |
            Q(profile__role__icontains=search_query) |
            Q(profile__location__icontains=search_query) |
            Q(profile__skills__icontains=search_query)
        )
        
        # Combine queries
        talents = talents.filter(name_query | profile_query)
        
    # Get unique roles for filter dropdown
    all_roles = Talent.objects.exclude(profile__role='').values_list('profile__role', flat=True).distinct()

    talents_list = []
    for talent in talents:
        skills = talent.profile.get('skills', [])
        talent_dict = {
            'id': talent.id,
            'email': talent.email,
            'name': talent.name,
            'image': request.build_absolute_uri(talent.image.url) if talent.image else None,
            'skills': skills,
            'average_rating': talent.profile.get('average_rating', 4.5),
            'profile': {
                **talent.profile,
                'is_available': talent.profile.get('is_available', True),  # Default to available
            },
            'created_at': talent.created_at,
        }
        talents_list.append(talent_dict)

    return {
        'talents': talents_list,
        'filters': {
            'search': search_query,
            'role': role_filter,
        },
        'available_roles': list(all_roles)
    }

@inertia('Talent/Index')
def talent_page(request):
    """
    Inertia view for the talent page that provides all developers.
    """
    talents = list(Talent.objects.all().order_by('id'))
    formatted_talents = []
    
    for talent in talents:
        skills = talent.profile.get('skills', [])
        formatted_talents.append({
            'id': str(talent.id),
            'name': talent.name,
            'image': request.build_absolute_uri(talent.image.url) if talent.image else None,
            'skills': skills,
            'average_rating': talent.profile.get('average_rating', 4.5),
            'profile': talent.profile,
        })
    
    return {
        'talents': formatted_talents
    }
@inertia('Talent/Show')
def talent_detail(request, talent_id):
    talent = get_object_or_404(Talent, id=talent_id)
    profile = talent.profile or {}

    return {
        'id': str(talent.id),
        'name': talent.name,
        'image': request.build_absolute_uri(talent.image.url) if talent.image else None,
        'role': profile.get('role', ''),
        'about': profile.get('bio', ''),
        'core_skills': profile.get('core_skills', []),
        'other_skills': profile.get('other_skills', []),
        'availability': profile.get('availability', ''),
        'linkedin': profile.get('linkedin', ''),
        'github': profile.get('github', ''),
        'devto': profile.get('devto', ''),
        'youtube_video': profile.get('youtube_video', ''),
    }


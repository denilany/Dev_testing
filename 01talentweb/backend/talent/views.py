"""
Views for the Talent app.

This module provides endpoints for listing and managing talent data.

Key Views:
- talents_list: Returns a list of all talents for the frontend, including id, email, name, profile (with role, bio, skills, etc.), and created_at fields. The data is formatted for Inertia.js and is used to render talent profiles in the frontend.

Additional endpoints can be added here to support CRUD operations or custom queries for the Talent model.
"""

from django.db.models import Q
from inertia import inertia
from .models import Talent

@inertia('Talent/Index')
def talents_list(request):
    search_query = request.GET.get('q', '').strip()
    talents = Talent.objects.all()
    
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

    return {
        'talents': list(talents.values(
            'id', 'email', 'name', 'profile', 'created_at'
        )),
        'filters': {
            'search': search_query
        }
    }


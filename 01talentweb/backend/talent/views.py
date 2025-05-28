from inertia import inertia
from .models import Talent
from django.utils import timezone
from django.db.models import Q
from django.core.cache import cache
import random

@inertia('Talent/Index')
def talents_list(request):
    talents = Talent.objects.all()
    return {
        'talents': list(talents.values(
            'id', 'email', 'name', 'profile', 'created_at'
        ))
    }

@inertia('Talent/Featured')
def featured_developers(request):
    """
    Rotate and return 10 featured developers daily.
    
    Strategy:
    1. Use cache to track the last rotation timestamp
    2. If 24 hours have passed, rotate to the next 10 developers
    3. Track featured order to ensure all developers get featured
    """
    FEATURED_CACHE_KEY = 'featured_developers_rotation'
    FEATURED_COUNT = 10
    
    # Check cache for last rotation timestamp
    last_rotation = cache.get(FEATURED_CACHE_KEY)
    current_time = timezone.now()
    
    # If no previous rotation or rotation is older than 24 hours
    if not last_rotation or (current_time - last_rotation).total_seconds() > 24 * 3600:
        # Get all developers
        all_devs = Talent.objects.all()
        total_devs = all_devs.count()
        
        # If no one has been featured yet, initialize the order
        if not all_devs.filter(featured_order__isnull=False).exists():
            # Assign random order to all developers
            devs_list = list(all_devs)
            random.shuffle(devs_list)
            for i, dev in enumerate(devs_list):
                dev.featured_order = i
                dev.save()
        
        # Get the next batch of featured developers
        max_featured_order = all_devs.filter(featured_order__isnull=False).order_by('-featured_order').first()
        if max_featured_order:
            current_order = max_featured_order.featured_order
        else:
            current_order = 0
        
        # Get the next 10 developers in order
        featured_devs = all_devs.filter(
            featured_order__gte=current_order,
            featured_order__lt=current_order + FEATURED_COUNT
        ).order_by('featured_order')
        
        # If we don't have enough developers left, wrap around
        if featured_devs.count() < FEATURED_COUNT:
            remaining_count = FEATURED_COUNT - featured_devs.count()
            remaining_devs = all_devs.filter(
                featured_order__lt=current_order
            ).order_by('featured_order')[:remaining_count]
            featured_devs = list(featured_devs) + list(remaining_devs)
        
        # Update cache rotation timestamp
        cache.set(FEATURED_CACHE_KEY, current_time, timeout=None)
    else:
        # Get the current featured developers
        featured_devs = Talent.objects.filter(
            featured_order__isnull=False
        ).order_by('featured_order')[:FEATURED_COUNT]
    
    # Format the data to match what the frontend expects
    formatted_devs = []
    for dev in featured_devs:
        skills = dev.profile.get('skills', [])
        formatted_devs.append({
            'id': str(dev.id),
            'name': dev.name,
            'image': f'/images/talents/{dev.name.lower().replace(" ", "_")}.jpg',
            'skills': skills,
            'average_rating': dev.profile.get('average_rating', 4.5)
        })
    
    return {
        'featured_developers': formatted_devs
    }
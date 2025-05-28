from inertia import inertia
from inertia import render
from talent.models import Talent
from django.utils import timezone
from django.db.models import Q
import random

@inertia('Home/Index')
def index(request):
    # Get all talents with featured_order
    all_devs = Talent.objects.filter(featured_order__isnull=False).order_by('featured_order')
    
    # Format the data to match what the frontend expects
    formatted_devs = []
    for dev in all_devs:
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

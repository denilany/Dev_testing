from inertia import inertia
from talent.models import Talent

@inertia('Home/Index')
def index(request):
    """
    Inertia view for the homepage that provides featured developers.

    Fetches all Talent objects with a non-null 'featured_order', orders them,
    and formats each developer's data to include id, name, image, skills, average_rating,
    and a profile object with role and bio. The formatted list is returned as
    'featured_developers' for use in the frontend.
    """
    # Get all talents with featured_order
    all_devs = Talent.objects.filter(featured_order__isnull=False).order_by('featured_order')
    
    formatted_devs = []
    for dev in all_devs:
        skills = dev.profile.get('skills', [])
        formatted_devs.append({
            'id': str(dev.id),
            'name': dev.name,
            'image': f'/images/talents/{dev.name.lower().replace(" ", "_")}.jpg',
            'skills': skills,
            'average_rating': dev.profile.get('average_rating', 4.5),
            'profile': {
                'role': dev.profile.get('role', ''),
                'bio': dev.profile.get('bio', ''),
            }
        })
    
    return {
        'featured_developers': formatted_devs
    }

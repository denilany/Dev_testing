from datetime import date
from inertia import inertia
from talent.models import Talent

@inertia('Home/Index')
def index(request):
    """
    Inertia view for the homepage that provides featured developers.

    Randomly selects 10 developers to feature each day, rotating through all developers
    before repeating the cycle. The selection is based on the current day and ensures
    all developers are featured before the cycle restarts.
    """
    all_devs = list(Talent.objects.all().order_by('id'))
    total = len(all_devs)
    if total == 0:
        return {'featured_developers': []}
    
    # Calculate the daily offset for rotation
    devs_per_day = 10
    today = date.today()
    cycle_length = (total + devs_per_day - 1) // devs_per_day
    day_index = (today.toordinal()) % cycle_length
    start = day_index * devs_per_day
    end = start + devs_per_day
    featured = all_devs[start:end]

    # If at the end, wrap around to the beginning
    if len(featured) < devs_per_day:
        featured += all_devs[:devs_per_day - len(featured)]
    formatted_devs = []
    for dev in featured:
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

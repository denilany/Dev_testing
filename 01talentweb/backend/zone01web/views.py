from datetime import date
from inertia import inertia
from info.models import Statistic, Client
from talent.models import Talent

def get_stats():
    return list(Statistic.objects.all().values('label', 'value', 'icon'))

def get_company_logos(request):
    return [
        {
            'name': client.name,
            'logo': request.build_absolute_uri(client.logo.url) if client.logo else None,
            'website': client.website,
        }
        for client in Client.objects.all()
    ]

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
            'image': request.build_absolute_uri(dev.image.url) if dev.image else None,
            'skills': skills,
            'average_rating': dev.profile.get('average_rating', 4.5),
            'profile': {
                'role': dev.profile.get('role', ''),
                'bio': dev.profile.get('bio', ''),
            }
        })
    stats = get_stats()
    company_logos = get_company_logos(request)
    print('DEBUG stats:', stats)
    print('DEBUG company_logos:', company_logos)
    return {
        'featured_developers': formatted_devs,
        'stats': stats,
        'company_logos': company_logos,
    }

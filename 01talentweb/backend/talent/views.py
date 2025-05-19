from inertia import inertia
from .models import Talent

@inertia('Talent/Index')
def talents_list(request):
    talents = Talent.objects.all()
    return {
        'talents': list(talents.values(
            'id', 'email', 'name', 'profile', 'created_at'
        ))
    }
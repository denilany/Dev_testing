from inertia import inertia
from django.contrib.auth.models import User

@inertia('Users/Index')  # Changed from Profiles/Index to Users/Index
def profiles_list(request):
    users = User.objects.all().select_related('profile')
    return {
        'users': list(users.values(
            'id', 'username', 'email', 
            'profile__phone_number', 'profile__date_of_birth'
        ))
    }
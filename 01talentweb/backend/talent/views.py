"""
Views for the Talent app.

This module provides endpoints for listing and managing talent data.

Key Views:
- talents_list: Returns a list of all talents for the frontend, including id, email, name, profile (with role, bio, skills, etc.), and created_at fields. The data is formatted for Inertia.js and is used to render talent profiles in the frontend.

Additional endpoints can be added here to support CRUD operations or custom queries for the Talent model.
"""

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


"""
Views for the Services app.

This module provides endpoints for listing and managing service data.

Key Views:
- services: Returns a list of all services for the frontend.

Additional endpoints can be added here to support CRUD operations or custom queries for the Service model.
"""

from inertia import inertia
from services.models import Service

@inertia('Services/Index')
def services(request):
    services = Service.objects.all()
    service_list = []
    for service in services:
        service_data = {
            'id': str(service.id),
            'name': service.name,
            'description': service.description,
            'image': request.build_absolute_uri(service.image.url) if service.image else None,
            'created_at': service.created_at
        }
        service_list.append(service_data)
    return {
        'services': service_list
    }
from inertia import inertia, render
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
    return render(request, {
        'services': service_list
    })
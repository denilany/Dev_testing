from inertia import inertia
from .models import About, Statistic, Client

@inertia('Info/About')
def about_page(request):
    about = About.objects.last()
    data = {
        'title': about.title if about else '',
        'content': about.content if about else '',
        'image': request.build_absolute_uri(about.image.url) if about and about.image else None,
        'updated_at': about.updated_at if about else None,
    }
    return {'about': data}

@inertia('Info/Statistics')
def statistics_page(request):
    stats = Statistic.objects.all().values('label', 'value', 'icon')
    return {'statistics': list(stats)}

@inertia('Info/Clients')
def clients_page(request):
    clients = Client.objects.all()
    client_list = [
        {
            'name': client.name,
            'logo': request.build_absolute_uri(client.logo.url) if client.logo else None,
            'website': client.website,
        }
        for client in clients
    ]
    return {'clients': client_list}
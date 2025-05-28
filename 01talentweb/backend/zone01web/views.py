from inertia import inertia
from info.models import Statistic, Client

@inertia('Home/Index')
def index(request):
    stats = Statistic.objects.all().values('label', 'value', 'icon')
    clients = Client.objects.all()
    client_list = [
        {
            'name': client.name,
            'logo': request.build_absolute_uri(client.logo.url) if client.logo else None,
            'website': client.website,
        }
        for client in clients
    ]
    return {
        'statistics': list(stats),
        'clients': client_list,
    }
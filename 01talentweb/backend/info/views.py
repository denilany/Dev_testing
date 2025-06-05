from inertia import inertia
from .models import About

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
from django.urls import path
from . import views

app_name = 'talent'
urlpatterns = [
    path('', views.talent_page, name='talent'),
    path('<uuid:talent_id>/', views.talent_detail, name='talent_detail'),
]
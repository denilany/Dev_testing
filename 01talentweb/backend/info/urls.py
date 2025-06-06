from django.urls import path
from . import views

urlpatterns = [
    path('about/', views.about_page, name='about'),
    path('statistics/', views.statistics_page, name='statistics'),
    path('clients/', views.clients_page, name='clients'),
]
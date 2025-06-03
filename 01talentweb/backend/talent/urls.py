from django.urls import path
from . import views

app_name = 'talent'
urlpatterns = [
    path('', views.talents_list, name='talents_list'),
]
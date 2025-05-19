from django.urls import path
from . import views

app_name = 'profiles'
urlpatterns = [
    path('', views.profiles_list, name='profiles_list'),
]
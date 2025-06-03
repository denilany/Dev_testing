"""
Django admin configuration for the Services app.
Registers the Service model to make it manageable via the Django admin interface.
"""

from django.contrib import admin
from .models import Service

admin.site.register(Service)
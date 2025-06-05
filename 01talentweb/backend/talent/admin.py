"""
Django admin configuration for the Talent app.
Registers the Talent model to make it manageable via the Django admin interface.
"""

from django.contrib import admin
from .models import Talent

@admin.register(Talent)
class TalentAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'name', 'created_at')
    search_fields = ('email', 'name')
    list_filter = ('created_at',)
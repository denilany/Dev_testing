from django.contrib import admin
from .models import Talent

@admin.register(Talent)
class TalentAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'name', 'created_at')
    search_fields = ('email', 'name')
    list_filter = ('created_at',)
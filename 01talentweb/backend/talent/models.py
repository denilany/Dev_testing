"""
Model definitions for the Talent app.
Defines the Talent model, which represents a tech talent with profile information and metadata.
"""

from django.db import models
from django.contrib.postgres.indexes import GinIndex
import uuid

class Talent(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    profile = models.JSONField(default=dict)
    image = models.ImageField(upload_to='talents/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    featured_order = models.IntegerField(null=True, blank=True)

    class Meta:
        db_table = 'talents'
        indexes = [
            models.Index(fields=['email']), 
            GinIndex(fields=['profile'], name='profile_gin_idx'),
            models.Index(fields=['featured_order']),
        ]

    def __str__(self):
        return self.name
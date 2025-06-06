from django.db import models

class About(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(upload_to='about/', null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Statistic(models.Model):
    label = models.CharField(max_length=100)
    value = models.PositiveIntegerField()
    icon = models.CharField(max_length=100, blank=True)  # Optional: for frontend icons

    def __str__(self):
        return f"{self.label}: {self.value}"

class Client(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='clients/')
    website = models.URLField(blank=True)

    def __str__(self):
        return self.name
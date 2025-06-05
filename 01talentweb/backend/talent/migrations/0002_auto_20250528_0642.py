from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('talent', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='talent',
            name='featured_order',
            field=models.IntegerField(null=True, blank=True),
        ),
    ]
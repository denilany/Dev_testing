from django.test import TestCase

from django.test import TestCase
from services.models import Service
import uuid

class ServiceModelTest(TestCase):
    def setUp(self):
        """Set up test data."""
        self.service_data = {
            'name': 'Web Development',
            'description': 'Building modern web applications.',
        }
        self.service = Service.objects.create(**self.service_data)

    def test_service_creation(self):
        """Test creating a Service instance."""
        self.assertIsInstance(self.service.id, uuid.UUID)
        self.assertEqual(self.service.name, self.service_data['name'])
        self.assertEqual(self.service.description, self.service_data['description'])
        self.assertFalse(self.service.image)
        self.assertIsNotNone(self.service.created_at)

    def test_str_method(self):
        """Test the __str__ method."""
        self.assertEqual(str(self.service), self.service_data['name'])

    def test_table_name(self):
        """Test that the table name is 'services'."""
        self.assertEqual(Service._meta.db_table, 'services')

    def test_ordering(self):
        """Test that services are ordered by -created_at."""
        Service.objects.create(name='API', description='API development')
        services = list(Service.objects.all())
        self.assertGreaterEqual(services[0].created_at, services[1].created_at)
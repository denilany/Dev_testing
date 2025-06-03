from django.test import TestCase
from .models import About, Statistic, Client
from django.core.files.uploadedfile import SimpleUploadedFile

class AboutModelTest(TestCase):
    def test_about_creation(self):
        about = About.objects.create(
            title="About Us",
            content="We are an international company.",
        )
        self.assertEqual(str(about), "About Us")
        self.assertEqual(about.title, "About Us")
        self.assertEqual(about.content, "We are an international company.")
        self.assertFalse(about.image)
        self.assertIsNotNone(about.updated_at)

class StatisticModelTest(TestCase):
    def test_statistic_creation(self):
        stat = Statistic.objects.create(
            label="Projects Completed",
            value=120,
            icon="star"
        )
        self.assertEqual(str(stat), "Projects Completed: 120")
        self.assertEqual(stat.label, "Projects Completed")
        self.assertEqual(stat.value, 120)
        self.assertEqual(stat.icon, "star")

class ClientModelTest(TestCase):
    def test_client_creation(self):
        logo = SimpleUploadedFile("logo.png", b"file_content", content_type="image/png")
        client = Client.objects.create(
            name="Tesla",
            logo=logo,
            website="https://tesla.com"
        )
        self.assertEqual(str(client), "Tesla")
        self.assertEqual(client.name, "Tesla")
        self.assertTrue(client.logo.name.endswith(".png"))
        self.assertEqual(client.website, "https://tesla.com")
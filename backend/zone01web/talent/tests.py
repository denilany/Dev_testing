from django.test import TestCase
from django.db import IntegrityError
from django.contrib.postgres.indexes import GinIndex
from talent.models import Talent
import uuid

class TalentModelTest(TestCase):
    def setUp(self):
        """Set up test data."""
        self.talent_data = {
            'email': 'workerman@gmail.com',
            'name': 'Worker Man',
            'profile': {'skills': ['Python', 'React'], 'experience_years': 1},
        }
        self.talent = Talent.objects.create(**self.talent_data)

    def test_talent_creation(self):
        """Test creating a Talent instance."""
        self.assertIsInstance(self.talent.id, uuid.UUID)
        self.assertEqual(self.talent.email, self.talent_data['email'])
        self.assertEqual(self.talent.name, self.talent_data['name'])
        self.assertEqual(self.talent.profile, self.talent_data['profile'])
        self.assertIsNotNone(self.talent.created_at)

    def test_email_unique_constraint(self):
        """Test that email field is unique."""
        with self.assertRaises(IntegrityError):
            Talent.objects.create(
                email=self.talent_data['email'],
                name='Worker Man',
                profile={'skills': ['Django']}
            )

    def test_profile_default(self):
        """Test that profile defaults to empty dict."""
        talent = Talent.objects.create(email='unique2@gmail.com', name='Worker Man')
        self.assertEqual(talent.profile, {})

    def test_str_method(self):
        """Test the __str__ method."""
        self.assertEqual(str(self.talent), self.talent_data['name'])

    def test_jsonb_profile_query(self):
        """Test querying JSONB profile field."""
        talent = Talent.objects.get(profile__skills__contains=['Python'])
        self.assertEqual(talent.email, self.talent_data['email'])

    def test_indexes(self):
        """Test that indexes are correctly defined."""
        indexes = Talent._meta.indexes
        self.assertEqual(len(indexes), 2)

        index_fields_and_names = [(index.fields, index.name) for index in indexes]

        expected_fields = [
            ['email'],
            ['profile'],
        ]

        for expected_field in expected_fields:
            found = any(fields == expected_field for fields, name in index_fields_and_names)
            self.assertTrue(found, f"Index on fields {expected_field} not found")

        self.assertTrue(any(isinstance(idx, GinIndex) and 'profile' in idx.fields for idx in indexes))

    def test_table_name(self):
        """Test that the table name is 'talents'."""
        self.assertEqual(Talent._meta.db_table, 'talents')
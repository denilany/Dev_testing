import json
from django.test import Client, TestCase
from django.db import IntegrityError
from django.contrib.postgres.indexes import GinIndex
from django.urls import reverse
from talent.models import Talent
import uuid

class TalentModelTest(TestCase):
    def setUp(self):
        """Set up test data."""
        self.talent_data = {
            'email': 'workerman@gmail.com',
            'name': 'Worker Man',
            'profile': {
                'skills': ['Python', 'React'],
                'experience_years': 1,
                'role': 'Backend',
                'bio': 'Backend developer',
                'location': 'Nairobi',
                'core_skills': ['Python'],
                'other_skills': ['React'],
                'availability': 'Available',
                'linkedin': 'https://linkedin.com/in/workerman',
                'github': 'https://github.com/workerman',
                'devto': 'https://dev.to/workerman',
                'youtube_video': 'https://youtube.com/embed/test'
            },
        }
        self.talent = Talent.objects.create(**self.talent_data)
        self.client = Client()

    def test_talent_detail_view(self):
        """Test the individual talent profile view returns correct data."""
        url = reverse('talent:talent_detail', args=[self.talent.id])
        response = self.client.get(url, HTTP_X_INERTIA=True)
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        props = data['props']
        self.assertEqual(props['id'], str(self.talent.id))
        self.assertEqual(props['name'], self.talent.name)
        self.assertEqual(props['role'], self.talent.profile['role'])
        self.assertEqual(props['about'], self.talent.profile['bio'])
        self.assertEqual(props['core_skills'], self.talent.profile['core_skills'])
        self.assertEqual(props['other_skills'], self.talent.profile['other_skills'])
        self.assertEqual(props['availability'], self.talent.profile['availability'])
        self.assertEqual(props['linkedin'], self.talent.profile['linkedin'])
        self.assertEqual(props['github'], self.talent.profile['github'])
        self.assertEqual(props['devto'], self.talent.profile['devto'])
        self.assertEqual(props['youtube_video'], self.talent.profile['youtube_video'])

    def test_talents_list_filter_by_role(self):
        """Test filtering talents by role."""
        Talent.objects.create(
            email='frontend@gmail.com',
            name='Frontend Dev',
            profile={'role': 'Frontend', 'skills': ['Vue'], 'bio': 'Frontend dev'}
        )
        url = reverse('talent:talent')
        response = self.client.get(url, {'role': 'Frontend'}, HTTP_X_INERTIA=True)
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        props = data['props']
        self.assertEqual(len(props['talents']), 2)
        self.assertTrue(any(t['name'] == 'Frontend Dev' for t in props['talents']))

    def test_talents_list_search(self):
        """Test searching talents by name and profile fields."""
        Talent.objects.create(
            email='searchman@gmail.com',
            name='Search Man',
            profile={'role': 'Search', 'skills': ['Elastic'], 'bio': 'Find me'}
        )
        url = reverse('talent:talent')
        # Search by name
        response = self.client.get(url, {'q': 'Search'}, HTTP_X_INERTIA=True)
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        props = data['props']
        self.assertTrue(any('Search Man' == t['name'] for t in props['talents']))
        # Search by skill in profile
        response = self.client.get(url, {'q': 'Elastic'}, HTTP_X_INERTIA=True)
        data = json.loads(response.content)
        props = data['props']
        self.assertTrue(any('Search Man' == t['name'] for t in props['talents']))

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
        self.assertEqual(len(indexes), 3)

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
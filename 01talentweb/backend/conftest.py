import pytest
import os
import django

@pytest.fixture(scope='session', autouse=True)
def django_setup():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'zone01web.settings')
    django.setup()
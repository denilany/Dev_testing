#!/bin/bash

set -e

echo "🚀 Setting up D.I.R.T Stack environment..."

# 1. Create .env if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating new .env file with secure credentials..."
  cat > .env <<EOL
# PostgreSQL
POSTGRES_DB=dirt_db
POSTGRES_USER=dirt_user
POSTGRES_PASSWORD=$(openssl rand -hex 16)
POSTGRES_HOST=postgres
POSTGRES_PORT=5432

# Django
DJANGO_SECRET_KEY=$(openssl rand -hex 32)
DJANGO_DEBUG=1
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
DJANGO_DATABASE_URL=postgres://dirt_user:\${POSTGRES_PASSWORD}@postgres:5432/dirt_db

# Frontend
VITE_API_URL=http://localhost:8002

# Admin User
DEFAULT_ADMIN_USER=admin
DEFAULT_ADMIN_EMAIL=admin@example.com
DEFAULT_ADMIN_PASSWORD=admin123
EOL
fi

export $(grep -v '^#' .env | xargs)

echo "Building Docker images..."
docker compose build

echo "Starting containers in detached mode..."
docker compose up -d

echo "Waiting for PostgreSQL to be ready..."
until docker compose exec -T postgres pg_isready -U $POSTGRES_USER -d $POSTGRES_DB > /dev/null 2>&1; do
  echo "   ...waiting for database..."
  sleep 2
done

echo "Running database migrations..."
if ! docker compose exec -T backend python manage.py migrate; then
  echo "Migration failed. Check backend logs with: docker compose logs backend"
  exit 1
fi

echo "Creating admin user..."
if ! docker compose exec -T backend python manage.py shell -c "
from django.contrib.auth import get_user_model;
User = get_user_model();
User.objects.create_superuser(
    username='$DEFAULT_ADMIN_USER',
    email='$DEFAULT_ADMIN_EMAIL',
    password='$DEFAULT_ADMIN_PASSWORD'
) if not User.objects.filter(username='$DEFAULT_ADMIN_USER').exists() else None
"; then
  echo "Admin user creation failed. Check backend logs with: docker compose logs backend"
  exit 1
fi

echo ""
echo "D.I.R.T Stack is now running!"
echo ""
echo "Access URLs:"
echo "- Frontend: http://localhost:3000"
echo "- Backend API: http://localhost:8002"
echo "- Admin Panel: http://localhost:8002/admin"
echo ""
echo "Admin credentials:"
echo "   Username: $DEFAULT_ADMIN_USER"
echo "   Password: $DEFAULT_ADMIN_PASSWORD"
echo ""
echo "To stop the application: docker compose down"
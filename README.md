# 01talentke Website

A modern web application built with Django, React, and PostgreSQL.

## 🚀 Technical Stack

- **Backend**: Django (Python)
- **Frontend**: React with Vite
- **Database**: PostgreSQL
- **Build Tool**: Vite
- **UI Framework**: Tailwind CSS
- **Page Management**: Inertia.js
- **Authentication**: Django's built-in authentication

## 🛠️ Technical Decisions

### Backend
- **Django**: Chosen for its robust security features, built-in admin interface, and excellent documentation
- **PostgreSQL**: Preferred for its reliability, scalability, and ACID compliance
- **Inertia.js**: Provides seamless integration between Django and React for server-side rendering
- **Django Vite**: Optimizes frontend asset management and development workflow

### Frontend
- **React**: Modern, component-based UI library with excellent developer experience
- **Vite**: Faster build times and better developer experience compared to Create React App
- **Tailwind CSS**: Utility-first CSS framework that allows rapid UI development without sacrificing customization

## 📦 Installation Guide

### Prerequisites
- Python 3.8+
- Node.js 16+
- PostgreSQL

### Backend Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd 01talentke_website
```

2. Navigate to the backend directory:
```bash
cd 01talentweb/backend
```

3. Create and activate virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

4. Install backend dependencies:
```bash
pip3 install -r requirements.txt
```

5. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

6. Initialize database:
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

7. Create superuser (optional):
```bash
python3 manage.py createsuperuser
```

8. Start backend server:
```bash
python3 manage.py runserver
```

#### Note: Running Model Tests (Development)
- For Testing Services and Talent models
```bash
cd backend
```

```bash
pytest /services/tests.py
```

```bash
pytest /talent/tests.py
```

The backend server will be running at http://127.0.0.1:8000/

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd ../frontend
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start frontend development server:
```bash
npm run dirt-dev
```

The frontend development server will be running at http://localhost:3000/

## 📝 Frontend Developer Guidelines

### Project Structure
```
frontend/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── layouts/        # Layout components
│   ├── assets/         # Static assets (images, fonts)
│   ├── styles/         # Global styles and Tailwind config
│   └── utils/          # Helper functions and utilities
└── public/            # Public assets
```

### Adding New Pages

1. Create a new page component in `src/pages/`:
```jsx
// Example: src/pages/YourPage.jsx
import React from 'react';
import { usePage } from '@inertiajs/react';

const YourPage = () => {
    const { props } = usePage();
    
    return (
        <div className="container mx-auto p-4">
            {/* Your page content */}
        </div>
    );
};

export default YourPage;
```

2. Register the page in your router configuration:
```jsx
// src/routes.js
import YourPage from './pages/YourPage';

export default {
    '/your-page': YourPage,
    // ... other routes
};
```

3. Add any required API endpoints in the backend:
```python
# zone01web/backend/zone01web/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/your-endpoint/', views.your_endpoint),
    // ... other endpoints
]
```

### Best Practices

1. **State Management**: Use React's built-in state management (useState, useEffect)
2. **Component Structure**: Create reusable components in `components/` directory
3. **Styling**: Use Tailwind CSS classes directly in JSX
4. **API Integration**: Use Django REST Framework endpoints
5. **Error Handling**: Implement proper error boundaries and error states
6. **Loading States**: Show loading indicators during API calls
7. **Responsive Design**: Use Tailwind's responsive classes

### Development Workflow

1. Always create new components in the appropriate directory
2. Use meaningful component names (PascalCase)
3. Keep components small and focused
4. Use Tailwind's utility classes for styling
5. Document any complex components or business logic
6. Test your components thoroughly

### Common Commands

- Start backend server:
```bash
python 01talentweb/backend/manage.py runserver
```

- Start frontend development server:
```bash
npm run dev
```

- Build frontend for production:
```bash
npm run build
```

- Run tests:
```bash
# Backend tests
python 01talentweb/backend/manage.py test

# Frontend tests
npm test
```

## 🚀 Deployment

### Backend
1. Configure environment variables in production
2. Set DEBUG=False in production
3. Configure proper security settings
4. Set up proper database connections
5. Configure static and media files

### Frontend
1. Build the frontend:
```bash
cd 01talentweb/frontend
npm run build
```
2. Serve the built files from your backend

## 🛠️ Troubleshooting

### Common Issues

1. **Database Connection**
   - Check your PostgreSQL service is running
   - Verify database credentials in .env
   - Ensure proper database permissions

2. **Frontend Build**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for conflicting package versions

3. **Environment Variables**
   - Ensure .env file exists
   - Verify all required variables are set
   - Check for typos in variable names

## 📝 License

MIT License - feel free to modify and distribute

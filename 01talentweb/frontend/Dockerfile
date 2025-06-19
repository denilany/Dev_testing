# Development Dockerfile for React/Vite frontend

FROM node:20-slim

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Expose Vite dev server port
EXPOSE 3000

# Start Vite dev server (hot reload)
CMD ["npm", "run", "dirt-dev"]
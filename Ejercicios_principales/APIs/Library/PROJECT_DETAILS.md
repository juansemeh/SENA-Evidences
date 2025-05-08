# Libreria API - Detailed Project Explanation

This document provides a detailed explanation of the entire project, including all components and their roles.

## Overview

Libreria API is a RESTful API built with Node.js and Express to manage a collection of books (libros). It supports CRUD operations and includes features for validation, error handling, logging, caching, security, and API documentation.

---

## Project Structure
.
- **src/app.js**  
  The main entry point of the application. Sets up middleware, routes, security features, logging, error handling, and API documentation

- **src/routes/libros.routes.js**  
  Defines the HTTP routes for libros. Routes map HTTP methods and paths to controller functions. Includes middleware for validation, caching, authentication, and file uploads.

- **src/controllers/libro.controller.js**  
  Contains controller functions that handle incoming requests, interact with the service layer, and send responses. Supports bulk operations and cover image upload, retrieval, and deletion.

- **src/services/libro.service.js**  
  Implements business logic and interacts with the data model. This layer abstracts database operations from controllers.

- **src/models/libro.js**  
  Defines database interaction methods using SQL queries via a connection pool. Methods include fetching, creating, updating (partial updates supported), deleting libros, bulk operations, and cover image path management.

- **src/database/database.js**  
  Sets up the PostgreSQL connection pool used by the models.

- **src/middleware/**  
  Contains custom middleware:
  - **asyncHandler.js**: Wraps async route handlers to catch errors.
  - **validateLibro.js**: Validates libro data in requests.
  - **errorHandler.js**: Centralized error handling middleware.
  - **logger.js**: Logs HTTP requests using Winston.
  - **winstonLogger.js**: Configures Winston logger.
  - **cache.js**: Caches GET request responses using node-cache.
  - **rateLimiter.js**: Limits repeated requests to prevent abuse.
  - **auth.js**: JWT authentication middleware.

- **src/swagger.js**  
  Configures Swagger for API documentation, accessible at `/api-docs`.

- **Configuration files**  
  - `.eslintrc.json`: ESLint configuration for code linting.
  - `.prettierrc`: Prettier configuration for code formatting.
  - `.gitignore`: Specifies files and folders to ignore in version control.

---

## Key Features and Details

### RESTful API

- Uses Express Router to define routes for libros.
- Supports GET (list and detail), POST (create), PUT (update), DELETE (remove).
- Supports bulk create, update, and soft delete operations.
- Supports file upload, retrieval, and deletion for book cover images.
- Routes use validation middleware to ensure data integrity.
- Routes are protected with JWT authentication.

### Service Layer

- Separates business logic from controllers.
- Handles data processing and calls model methods.

### Database Interaction

- Uses PostgreSQL with parameterized queries to prevent SQL injection.
- Connection pooling for efficient database access.
- Supports partial updates to libros.
- Stores cover image file paths in the database.

### Middleware

- **Validation**: Ensures incoming data meets requirements.
- **Error Handling**: Catches and formats errors consistently.
- **Logging**: Uses Winston to log requests and errors.
- **Caching**: Caches GET responses to improve performance.
- **Security**: Helmet for HTTP headers, CORS for cross-origin requests, rate limiting to prevent abuse, JWT authentication.

### API Documentation

- Swagger UI available at `/api-docs` for interactive API exploration.

### Code Quality

- ESLint and Prettier enforce consistent style and catch issues early.

---

## How to Run

1. Install dependencies: `npm install`
2. Configure PostgreSQL connection in `src/database/database.js`.
3. Run database migrations or execute `src/database/init.sql` and apply any additional schema changes (e.g., adding coverImage column).
4. Start the server: `npm start`
5. Access API docs at `http://localhost:3000/api-docs`

---

## Future Enhancements

- Add more comprehensive unit and integration tests.
- Add Docker support for containerized deployment.
- Enhance logging and monitoring.
- Implement role-based authorization.
- Support storing images in cloud storage services.

---

This detailed explanation should help you understand every part of the project and how they work together.

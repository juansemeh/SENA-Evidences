# Libreria API

A RESTful API built with Node.js and Express to manage a collection of books (libros).

## Features

- CRUD operations for libros (books)
- Bulk create, update, and soft delete
- File upload, retrieval, and deletion for book cover images
- Input validation and error handling
- Logging and caching for performance
- Security features including JWT authentication, rate limiting, CORS, and Helmet
- API documentation with Swagger UI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd libreria-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure PostgreSQL connection in `src/database/database.js`.

4. Run database migrations or execute `src/database/init.sql` and apply any additional schema changes (e.g., adding coverImage column).

5. Start the server:
   ```
   npm start
   ```

6. Access API documentation at:
   ```
   http://localhost:3000/api-docs
   ```

## API Endpoints

- `GET /api/v1/libros` - List libros with pagination and search
- `GET /api/v1/libros/:id` - Get libro by ID
- `POST /api/v1/libros` - Create a new libro
- `PUT /api/v1/libros/:id` - Update a libro (partial updates supported)
- `DELETE /api/v1/libros/:id` - Soft delete a libro
- `POST /api/v1/libros/bulk` - Bulk create libros
- `PUT /api/v1/libros/bulk` - Bulk update libros
- `DELETE /api/v1/libros/bulk` - Bulk soft delete libros
- `POST /api/v1/libros/:id/cover` - Upload cover image
- `GET /api/v1/libros/:id/cover` - Get cover image
- `DELETE /api/v1/libros/:id/cover` - Delete cover image

## Authentication

All routes are protected with JWT authentication. Obtain a token via the `/auth/login` endpoint and include it in the `Authorization` header as `Bearer <token>`.

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

MIT License

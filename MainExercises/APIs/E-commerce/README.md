# Minimal TypeScript API

This project is a minimal TypeScript API for an e-commerce-like system with the following features:

## Features

- Product listing and detail retrieval (`/products` endpoint)
- User management with registration and login (`/users/register` and `/users/login` endpoints)
- JWT-based authentication for protected routes
- Cart management with JWT-protected routes (`/cart` endpoint)
- PostgreSQL integration for user data persistence

## Project Structure

- `src/index.ts`: Main server entry point, routes requests to handlers
- `src/routes/`: Contains route handlers for products, users, and cart
- `src/models/`: TypeScript interfaces for data models
- `src/middlewares/`: Middleware for JWT authentication
- `src/db.ts`: PostgreSQL database connection setup
- `src/data/`: Static data for products
- `src/db-init.sql`: SQL script to create necessary database tables

## Setup

1. Install dependencies:

```bash
npm install
npm install --save-dev @types/pg @types/jsonwebtoken
```

2. Set up PostgreSQL database and run the SQL script in `src/db-init.sql` to create the `users` table.

3. Update database connection settings in `src/db.ts` as needed.

4. Start the server:

```bash
npm start
```

## Usage

- Register a new user:

```bash
curl -X POST http://localhost:3000/users/register -H "Content-Type: application/json" -d '{"username":"user1","password":"pass123"}'
```

- Login to get JWT token:

```bash
curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"username":"user1","password":"pass123"}'
```

- List products:

```bash
curl http://localhost:3000/products
```

- Add item to cart (replace YOUR_JWT_TOKEN with the token from login):

```bash
curl -X POST http://localhost:3000/cart -H "Authorization: Bearer YOUR_JWT_TOKEN" -H "Content-Type: application/json" -d '{"productId":1,"quantity":2}'
```

- View cart:

```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" http://localhost:3000/cart
```

## Notes

- JWT secret key is hardcoded in `src/middlewares/auth.ts` for simplicity. For production, use environment variables.
- Passwords are stored in plaintext for demonstration purposes. Use hashing (e.g., bcrypt) in real applications.
- The cart is stored in memory and resets on server restart.

## License

This project is provided as-is for learning and demonstration purposes.

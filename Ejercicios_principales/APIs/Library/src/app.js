require('dotenv').config();
// src/app.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('./middleware/rateLimiter');
const app = express();
const port = process.env.PORT || 3000;
const librosRoutes = require('./routes/libros.routes');
const authRoutes = require('./routes/auth.routes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const setupSwagger = require('./swagger');
const authenticateJWT = require('./middleware/auth');

app.use(helmet());
app.use(cors());
app.use(rateLimiter);

app.use(logger);
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Welcome to the Libreria API');
});

// Public route for login to get JWT token
app.use('/auth', authRoutes);

// Use API versioning and protect /api/v1 routes with JWT auth
app.use('/api/v1', authenticateJWT, librosRoutes);

// Setup Swagger API docs
setupSwagger(app);

// Centralized error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

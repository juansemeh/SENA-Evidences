import { IncomingMessage, ServerResponse } from 'http';
import pool from '../db';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../middlewares/auth';

function parseRequestBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
  });
}

export async function handleUsersRoute(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'POST') {
    if (req.url === '/users/register') {
      try {
        const { username, password } = await parseRequestBody(req);
        if (!username || !password) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'Username and password are required' }));
          return;
        }
        // Check if user exists
        const userCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userCheck.rows.length > 0) {
          res.statusCode = 409;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'User already exists' }));
          return;
        }
        // Insert new user
        await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'User registered successfully' }));
      } catch (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Internal server error' }));
      }
    } else if (req.url === '/users/login') {
      try {
        const { username, password } = await parseRequestBody(req);
        if (!username || !password) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'Username and password are required' }));
          return;
        }
        // Check user credentials
        const userCheck = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
        if (userCheck.rows.length === 0) {
          res.statusCode = 401;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'Invalid credentials' }));
          return;
        }
        // Generate JWT token
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Login successful', token }));
      } catch (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Internal server error' }));
      }
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Not Found' }));
    }
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
}

import { IncomingMessage, ServerResponse } from 'http';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // In production, use environment variables

export function verifyToken(req: IncomingMessage, res: ServerResponse): Promise<any> {
  return new Promise((resolve, reject) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if (!authHeader || Array.isArray(authHeader)) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Authorization header missing' }));
      reject(new Error('Authorization header missing'));
      return;
    }
    const token = (authHeader as string).split(' ')[1];
    if (!token) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Token missing' }));
      reject(new Error('Token missing'));
      return;
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Invalid token' }));
        reject(new Error('Invalid token'));
        return;
      }
      resolve(decoded);
    });
  });
}

export { SECRET_KEY };

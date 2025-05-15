import { IncomingMessage, ServerResponse } from 'http';
import { products } from '../data/products';

export function handleProductsRoute(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
  } else {
    res.statusCode = 405; // Method Not Allowed
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
}

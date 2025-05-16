import { IncomingMessage, ServerResponse } from 'http';
import { products } from '../data/products';
import url from 'url';

export function handleProductsRoute(req: IncomingMessage, res: ServerResponse) {
  const parsedUrl = url.parse(req.url || '', true);
  if (req.method === 'GET') {
    if (parsedUrl.pathname === '/products') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(products));
    } else {
      // Extract product id from path /products/:id
      const idMatch = parsedUrl.pathname?.match(/^\/products\/(\d+)$/);
      if (idMatch) {
        const id = parseInt(idMatch[1], 10);
        const product = products.find(p => p.id === id);
        if (product) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(product));
        } else {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'Product not found' }));
        }
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Not Found' }));
      }
    }
  } else {
    res.statusCode = 405; // Method Not Allowed
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
}

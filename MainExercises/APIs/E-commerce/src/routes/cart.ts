import { IncomingMessage, ServerResponse } from 'http';
import { verifyToken } from '../middlewares/auth';

interface CartItem {
  productId: number;
  quantity: number;
}

const userCarts: Record<string, CartItem[]> = {};

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

export async function handleCartRoute(req: IncomingMessage, res: ServerResponse) {
  try {
    const decoded = await verifyToken(req, res);
    if (!decoded) return; // verifyToken handles response on failure

    const username = (decoded as any).username;

    if (req.method === 'GET') {
      const cart = userCarts[username] || [];
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ cart }));
    } else if (req.method === 'POST') {
      const { productId, quantity } = await parseRequestBody(req);
      if (typeof productId !== 'number' || typeof quantity !== 'number') {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'productId and quantity must be numbers' }));
        return;
      }
      if (!userCarts[username]) {
        userCarts[username] = [];
      }
      const existingItem = userCarts[username].find(item => item.productId === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        userCarts[username].push({ productId, quantity });
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Item added to cart', cart: userCarts[username] }));
    } else {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    }
  } catch (err) {
    // verifyToken already handles response on auth failure
    if (!res.writableEnded) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Internal server error' }));
    }
  }
}

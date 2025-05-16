import http from 'http';
import url from 'url';
import { handleProductsRoute } from './routes/products';
import { handleUsersRoute } from './routes/users';
import { handleCartRoute } from './routes/cart';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url || '', true);
  if (parsedUrl.pathname?.startsWith('/products')) {
    handleProductsRoute(req, res);
  } else if (parsedUrl.pathname?.startsWith('/users')) {
    handleUsersRoute(req, res);
  } else if (parsedUrl.pathname?.startsWith('/cart')) {
    handleCartRoute(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

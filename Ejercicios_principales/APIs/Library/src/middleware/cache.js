// src/middleware/cache.js
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 }); // cache for 60 seconds

function cacheMiddleware(req, res, next) {
  if (req.method === 'GET') {
    const key = req.originalUrl;
    const cachedBody = cache.get(key);
    if (cachedBody) {
      return res.json(cachedBody);
    } else {
      res.sendResponse = res.json;
      res.json = (body) => {
        cache.set(key, body);
        res.sendResponse(body);
      };
      next();
    }
  } else {
    // Invalidate cache on POST, PUT, DELETE
    cache.flushAll();
    next();
  }
}

module.exports = cacheMiddleware;

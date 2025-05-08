// src/middleware/logger.js
const winstonLogger = require('./winstonLogger');

function logger(req, res, next) {
  winstonLogger.info(`${req.method} ${req.url}`);
  next();
}

module.exports = logger;

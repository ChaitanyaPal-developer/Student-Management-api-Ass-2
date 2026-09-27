// middleware/logger.js
// Custom Logger Middleware - logs Method, URL and Time of every request

const logger = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next(); // pass control to the next middleware / route handler
};

module.exports = logger;

const { RequestLog } = require('../../models');

module.exports = async (req, res, next) => {
  console.log('Logger ejecutándose:', req.method, req.originalUrl);
  try {
    await RequestLog.create({
      method: req.method,
      path:   req.originalUrl,
      ip:     req.ip,
    });
    console.log('Log guardado correctamente');
  } catch (err) {
    console.error('Error guardando log:', err.message);
  }
  next();
};
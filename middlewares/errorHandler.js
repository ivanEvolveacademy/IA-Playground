module.exports = (err, req, res, next) => {
  console.error(err);
  const isDevelopment = process.env.NODE_ENV === 'development';
  res.status(err.status || 500).json({
    error: isDevelopment ? err.message : 'Error interno del servidor'
  });
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://connetcions-api.herokuapp.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};

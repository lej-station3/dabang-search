const { createProxyMiddleware } = require('http-proxy-middleware');
const TARGET = 'http://test-dabang-main.dabangapp.com';

module.exports = app => {
  app.use(
    createProxyMiddleware('/api', {
      target: TARGET,
      changeOrgin: true
    })
  );
};

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://shippex-demo.bc.brandimic.com/api/method",
      changeOrigin: true,
    })
  );
};

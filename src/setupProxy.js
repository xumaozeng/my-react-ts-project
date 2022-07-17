const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api_student",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      pathRewrite: { "^/api_student": "" }
    })
  );
  app.use(
    "/api_car",
    createProxyMiddleware({
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api_car": "" }
    })
  );
};

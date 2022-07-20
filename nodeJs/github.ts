/**
 * 后端重定向到https://api.github.com/search/users?q=atguigu
 */

import express from "express";

const app = express();

app.use((request, response, next) => {
  console.log("请求的地址", request.url);
  console.log("代理的地址https://api.github.com/search/users?q=xxx");
  next();
});

app.get("/search/users", (request, response) => {
  const { q } = request.query;
  response.redirect(`https://api.github.com/search/users?q=${q}`);
});

app.listen(5002, () => {
  console.log("服务器启动了，地址为http://localhost:5002/search/users");
});
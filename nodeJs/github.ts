/**
 * 后端请求https://api.github.com/search/users?q=atguigu
 */

import express from "express";
import axios from "axios";

const app = express();

app.use((request, response, next) => {
  console.log("请求的地址", request.url);
  console.log("代理的地址https://api.github.com/search/users?q=xxx");
  next();
});

app.get("/search/users", async (request, response) => {
  const { q } = request.query;
  const res = await axios.get("https://api.github.com/search/users", { params: { q } });
  response.json(res.data);
});

app.listen(5002, () => {
  console.log("服务器启动了，地址为http://localhost:5002/search/users");
});

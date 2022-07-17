/**
 * 学生student的接口
 */

const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("有人请求服务器了");
  console.log("请求头的host", request.get("host"));
  console.log("请求的地址", request.url);
  next();
});

app.get("/students", (request, response) => {
  const students = [
    { id: "001", name: "小张", age: 18 },
    { id: "002", name: "小李", age: 19 },
    { id: "003", name: "小红", age: 20 }
  ];
  response.send(students);
});

app.listen(5000, err => {
  if (!err)
    console.log(
      "服务器启动成了，请求学生信息地址为：http://localhost:5000/students"
    );
});

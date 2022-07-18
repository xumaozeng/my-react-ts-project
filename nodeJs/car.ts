/**
 * 学生student的接口
 */
import express from "express";
import { carProps } from "./types";

const app = express();

app.use((request, response, next) => {
  console.log("有人请求服务器了");
  next();
});

app.get("/cars", (request, response) => {
  const cars: carProps[] = [
    { id: "001", name: "奔驰", price: 300000 },
    { id: "002", name: "宝马", price: 340000 },
    { id: "003", name: "雷克萨斯", price: 400000 }
  ];
  response.send(cars);
});

app.listen(5001, () => {
  console.log("服务器启动成了，请求学生信息地址为：http://localhost:5001/cars");
});

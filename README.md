### my-react-ts-project

练手 react 项目+TS

项目目录：

```
...
src
    pages
        todoList  //这是一个完整的代办事项
        Axios.tsx //axios请求与代理的使用
    ...
```

#### todoList 待办事项

> 注意删除public/index.html中的bootstrap引用link样式覆盖

1.  拆分组件、实现静态组件，注意：className、style 的写法
2.  动态初始化列表，如何确定将数据放在哪个组件的 state 中：

        - 某个组件使用：放在自身的state中
        - 某些组件使用：放在他们共同的父组件state中（官方称此操作：状态提升）

3.  关于父子之间通信：

        - 父组件给子组件传递数据：通过props传递
        - 子组件给父组件传递数据：通过props传递，要求父提前给子组件传递一个函数

4.  注意 defaultChecked 和 checked 的区别，类似的还有：defaultValue 和 value
5.  状态在哪里，操作状态的方法就在哪里

#### Axios请求与代理的使用

###### 方法一

> 在package.json文件中追加如下配置

```
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀
2. 缺点：不能配置多个代理
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000（优先匹配前端资源public文件夹下，public指代当前根目录）

###### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js //只能使用CommonJS方式
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```
   const { createProxyMiddleware } = require("http-proxy-middleware");
   
   module.exports = function (app) {
     app.use(
       "/api_student", //请求前缀，所有带有此前缀的都会转发给目标地址
       createProxyMiddleware({
         target: "http://localhost:5000", //配置转发目标地址
         changeOrigin: true, //请求头中host字段
         pathRewrite: { "^/api_student": "" } //取出请求前缀
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
   ```

   说明：

   1. 优点：可以配置多个代理，灵活的控制请求是否走代理
   2. 缺点：配置繁琐，前端请求资源时必须加前缀


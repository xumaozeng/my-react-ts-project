### my-react-ts-project

练手 react 项目+TS

项目目录：

```
...
src
    pages
        todoList  //这是一个完整的代办事项
        Axios.tsx //axios请求与代理的使用
        githubSearch //这是一个github搜索案例
        simpleRouter //react-router5的使用介绍
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

#### github搜索案例

1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办

2. ES6小知识点：解构赋值+重命名

   ```
   let obj = {a:{b:1}};
   const {a} = obj; //传统解构赋值
   const {a:{b}} = obj; //连续解构赋值
   const {a:{b:value}} = obj; //连续解构赋值+重命名
   ```

3. 消息订阅与发布机制

   ```
   (1) 先订阅，再发布（理解：有一种隔空对话的感觉）
   (2) 适用于任意组件间通信
   (3) 要在组件的卸载生命钩子中取消订阅
   ```

4. fetch发送请求（关注分离的设计思想）

   ```
   try {
     const response = await fetch(`/api/search/users?q=${keyWord}`);
     const data = await response.json();
     console.log(data);
   } catch (error) {
     console.log("请求错误", error);
   }
   // 注意在外层加上async函数
   ```

   

#### react-router-dom的基本介绍

##### 一、理由的基本使用

1. 明确好界面中的导航区、展示区

2. 导航区的a标签改为Link标签	

   ```javascript
   <Link to="/xxxx">Demo</Link
   ```

3. 展示区写Route标签进行路径的匹配

   ```javascript
   <Route path="/xxxx" component={Demo} />
   ```

4. `<App>`的最外层包裹一个`<BrowserRouter>`或`<HashRouter>`

##### 二、路由组件与一般组件

1. 写法不同

   一般组件：<Demo />

   路由组件：<Route path="/demo" component={Demo} />

2. 存放位置不同

   一般组件：components文件夹下

   路由组件：pages文件夹下

3. 接收到的props不同

   一般组件：写组件标签时传递了什么，就能收到什么

   路由组件：接收到三个固定的属性：

   ​                  history: { action, go, goBack, goForward, length, listen, location, push, replace }

   ​                  location: { pathname, search, state }

   ​                  match: { params, path, url }

##### 三、NavLink与封装NavLink

1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过this.props.children可以获取标签体内容

##### 四、Switch的使用

1. 通常情况下，path和component是一一对应的关系
2. Switch可以提高路由匹配效率（单一匹配）

##### 五、解决多级路径刷新页面样式丢失的问题

1. public/index.html 中引入样式时不写`./`写`/`（常用）
2. public/index.html中引入样式时不写`./`写`%PUBLIC_URL%`（常用）
3. 使用HashRouter

##### 六、路由的严格匹配与模糊匹配

1. 默认使用的模糊匹配（简单记：**输入的路径** 必须包含 **要匹配的路径**，且顺序一致）
2. 开启严格模式：`<Route exact path="/about" component={About} />`
3. 严格匹配不要随便开启，需要时再开，有些时候开启会导致无法继续匹配二级路由

##### 七、Redirect的使用

1. 一般写在所有路由组件注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由

2. 具体的编码：

   ```javascript
   <Switch>
       <Route path="/about" component={About} />
       <Route path="/home" component={Home} />
       <Redirect to="/about" />
   <Switch/>
   ```

##### 八、嵌套路由

1. 注册子路由时要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的

##### 九、向路由组件传递参数

1. params参数

   路由链接（携带参数）：`<Link to={"/demo/test/tom/18"}>详情< /Link>`

   注册路由（声明接收）：`<Route path="/demo/test/:name/:age" component={Test} />`

   接收参数：`const { name, age } = this.props.match.params`

2. search参数

   路由链接（携带参数）：`<Link to={"/demo/test?name=tom&age=18"}>详情< /Link>`

   注册路由（无需声明，正常注册即可）：`<Route path="/demo/test" component={Test} />`

   接收参数：`const { search } = this.props.location`

   备注：获取到的search是urlencode编码的字符串，需要借助querystring解析

3. state参数

   路由链接（携带参数）：`<Link to={{pathname:"/demo/test", state:{name:"tome",age:18}}}>详情< /Link>`

   注册路由（无需声明，正常注册即可）：`<Route path="/demo/test" component={Test} />`

   接收参数：`const { name, age } = this.props.location.state`

   备注：刷新也可以保留住参数

##### 十、编程式路由导航

1. `push(path:string, state:{})`
2. `replace(path:string, state:{})`

##### 十一、BrowserRouter与HashRouter的区别

1. 底层原理不一样：

   BrowserRouter使用的是H5的history API，不兼容IE9及以下版本

   HashRouter使用的是URL的哈希值

2. url的表现形式不一样

   BrowserRouter的路径中没有#，例如localhost:3000/demo/test

   HashRouter的路径包含#，例如localhost:3000/#/demo/test

3. 刷新后对路由state参数的影响

   BrowserRouter没有任何影响，因为state保存在history对象中

   HashRouter刷新后会导致路由state参数的丢失

4. 备注：HashRouter可以用于解决一些路径错误相关的问题

##### 十二、withRouter的使用注意

1. withRouter是一个高阶函数hoc，接收一个一般组件为参数，返回一个新的组件，使得其带有history、location、match路由组件的三大参数
2. 简单来说就是可以加工一般组件，让一般组件具备路由组件所特有的API
3. 返回值是一个新组件
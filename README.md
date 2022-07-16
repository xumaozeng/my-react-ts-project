### my-react-ts-project

练手 react 项目+TS

项目目录：

```
...
src
    pages
        todoList  //这是一个完整的代办事项
    ...
```

#### todoList 待办事项

1.  拆分组件、实现静态组件，注意：className、style 的写法
2.  动态初始化列表，如何确定将数据放在哪个组件的 state 中：

        - 某个组件使用：放在自身的state中
        - 某些组件使用：放在他们共同的父组件state中（官方称此操作：状态提升）

3.  关于父子之间通信：

        - 父组件给子组件传递数据：通过props传递
        - 子组件给父组件传递数据：通过props传递，要求父提前给子组件传递一个函数

4.  注意 defaultChecked 和 checked 的区别，类似的还有：defaultValue 和 value
5.  状态在哪里，操作状态的方法就在哪里

# 基于 React 的拖拽效果 Demo

一个基于 React 的拖拽功能实现的 Demo.

## 两个关键点

1, draggable 属性

2, drag 事件

### draggable 属性

img 标签默认是支持拖拽的, 当时其他 HTML 标签, 想要其拖动的话, 需要为其添加 draggable="true" 属性

### drag 事件

drag 相关的事件有: ondragstart、ondragend、ondragenter、ondragover、ondragleave、ondrop

一般情况下, 在实际使用时, 根据需求会有以下使用情况:

1, 被拖拽元素实现: ondragstart、ondragend

2, 被放置元素实现: ondragenter、ondragover、ondragleave、ondrop

注意: ondragover 的默认事件 Reset the current drag operation to "none". 所以想让一个元素可放置，需要重写 ondragover, 使用 preventDefault() 阻止其默认行为.
```JavaScript
element.ondragover = event => { 
    event.preventDefault();
    // ...
}
```
一般会在 ondrop 事件中确定最终行为的实现.

# 项目简介

项目分为 todo-panel, todo-list, todo-item 三个组件

1, todo-panel 控制整个 demo 效果的布局和总逻辑的实施, 所有响应式的 state 都在该组件中实现.
总控室.
所有需要动态渲染的 state 都在当前组件中配置

2, todo-list 列表组件, 用于展示某种形态的列表
桥梁.
子组件(todo-item)的 drag 行为需要通过 todo-list 组件传递给父组件(todo-panel);
父组件(todo-panel)的 state 变化, 也会引起 todo-list 的动态渲染.

3, todo-item 本 demo 中最小的行动单元, 具体的某一个 todo行为 的 封装组件
也是 被拖拽 的元素(组件), 因此, 在其内部实现了 ondragstart 和 ondragend 两个方法


**注意: 当前 demo 只是一个本地的演示, 目的在于说明 drag 行为的实现需要配置的属性 以及 可能需要实现的事件, 在实际工作中可能还需要 ajax 请求的参与, 这里不再赘述.**

# 项目源码地址
[源码地址传送门](https://github.com/CoderLeoD/react-drag)

# 项目截图
![项目截图](https://raw.githubusercontent.com/CoderLeoD/react-drag/main/src/images/demo.png)


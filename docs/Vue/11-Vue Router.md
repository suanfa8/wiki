### Vue Router基本使用

和 v-if、v-show 一样，Vue Router 是用来切换组件的显示的。

+ v-if/v-show 是标记来切换：`true/false`；
+ Vue Router 是用哈希来切换：(#/xxx)；
+ 比 v-if/v-show 强大的是 Vue Router **不仅能切换组件的显示，还能在切换的时候传递参数**。

使用方式：

1. 导入 Vue Router：在 vue.js 之后
2. 定义路由规则

```
const routes = [
  // 数组中的每一个对象就是一条规则
  { path: '/one' , component: one},
  { path: '/two' , component: two},
]
```

> 数组中的每一个对象就是一条规则，即匹配到哪一个 hash，显示哪一个组件。

3、根据路由规则创建路由对象

```
const router = new VueRouter({
  routes: routes
});
```

4、将路径对象挂在到 Vue 实例中

```
// 这里就是 MVVM中 的 View Modell 
let vue =new Vue({
  el: "#app",
  router: router,
})
```

5 、修改 URL 哈希值

```
<div id="app">
  <a href="#/one">切換到第一个界面</a>
  <a href="#/two">切換到第二个界面</a>
</div>
```

6 、通过 `<router-view>` 渲染匹配的组件（出口）

```
<div id="app">
  <a href="#/one">切換到第一个界面</a>
  <a href="#/two">切換到第二个界面</a>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染到这里 -->
</div>
```

补充：上面用到的组件只需要进行定义。

```
// 定义组件
const one = { template: '#one'}
const two = { template: '#two'}
```






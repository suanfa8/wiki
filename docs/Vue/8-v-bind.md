### 12-Vue 常用指令-v-bind（**给标签的属性赋值**）



1. 什么是 v-bind 指令

在企业开发中想要给「元素」绑定数据，我们可以使用 `{{}}`、`v-text`、`v-html`。但是如果想给「元素的属性」绑定数据，就必须使用 `v-bind`，所以：

```

```

+ `v-bind` 的作用是专门用于给「元素的属性」绑定数据的。

2. `v-bind` 格式

```
v-bind:属性名称="绑定的数据 属性名称="绑定的数据
```

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<div id="app">
    <p>{{name}}</p>
    <p v-html="name"></p>
    <p v-text="name"></p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            name: "算法吧"
        }
    })
</script>
</body>
</html>
```


专门用于给元素的属性绑定数据（即强制绑定）。

格式：

```
v-bind:属性名称="绑定的数据"
```

或者：

```
:属性名称="绑定的数据"
```

**赋值的数据可以是任意一个合法的 JS 表达式**。

格式（通过 v-bind）：

示例 1：绑定类名 class

```
:class="['需要绑定的类名1', '需要绑定的类名2'......]"
:class={'需要绑定的类名1' : true/false,'需要绑定的类名2' : true/false} ，true 和 false 可以是 Vue 实例对象中 data 中的数据变量。
```

**注意**：

1. 不能直接 `:class="类名"`；
2. 第一种方式,[]外面也需要引号，[]内每个类名也需要引号，[]内支持三目运算符:class=”[isTrue?‘类名1’:’’]”

3. 第二种方式中，key 是类名，value 是 **布尔值**；
4. 整个 `{}` 可以是 Model 中的数据。

```
:class='obj'

data:{
  obj: {
    'red':true,
    'bold':true
  }
}
```

### 13-Vue 常用指令-绑定类名

### 14-Vue 常用指令-绑定样式
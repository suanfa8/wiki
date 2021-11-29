## 2、Vue 框架使用步骤

### 2.1 下载 Vue 框架

### 2.2 导入 Vue 框架

### 2.3 常见 Vue 实例对象

### 2.4 指定 Vue 实例对象控制的区域

### 2.5 指定Vue 实例对象控制区域的数据

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
            {{ name }}
        </div>
    
        <!-- 开发环境版本，包含了有帮助的命令行警告 -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
        <script>
            var vm = new Vue({
                // el：提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
                el: '#app',
                // Vue 实例的数据对象，用于给 View 提供数据
                data: {
                    name: 'hello vue',
                }
            })
        </script>
    </body>
</html>
```

### 
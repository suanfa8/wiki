### 15-Vue 常用指令-v-on

常见修饰符

| .once    | 只触发一次回调                                   |
| -------- | ------------------------------------------------ |
| .prevent | 调用event.preventDefault()                       |
| .self    | 只当事件是从侦听器绑定的元素本身触发时才触发回调 |
| .stop    | 调用event.stopPropagation()                      |
| .capture | 添加事件监听器时使用capture模式                  |

 书写格式：

+ once

```
<button v-on:click.once="myFn">我是按钮</button>
```

+ prevent

```
<a href="" v-on:click.prevent="myFn">我是 A 标签</a>
```

+ self
+ stop

+ capture（事件捕获模式）







专门用于给元素绑定监听事件

格式：

```
v-on:事件名称=”回调函数名”

@事件名称=”回调函数名”
```



事件触发后，会去 Model 的 methods 中找回调函数

 

注意点：事件不需要写 on

 赋值是一个回调函数

### 16-Vue 常用指令-v-on 修饰符

常见修饰符

| .once    | 只触发一次回调                                   |
| -------- | ------------------------------------------------ |
| .prevent | 调用event.preventDefault()                       |
| .self    | 只当事件是从侦听器绑定的元素本身触发时才触发回调 |
| .stop    | 调用event.stopPropagation()                      |
| .capture | 添加事件监听器时使用capture模式                  |

 

书写格式：

once

prevent

self

Stop

capture（事件捕获模式）



### 17-Vue 常用指令-v-on 注意点

1 绑定回调函数名称的时候，后面可以加() ,也可以不加

 ```
@click = ‘myFn’
@click = ‘myFn()’  
 ```



 

_2 可以传递参数

```
@click = “myFn(‘yjx’,33)” //普通数据  

@click = “myFn($event)” //原生事件对象  


```

 

_3 回调函数中使用Model中的data中的数据需要加this.

```
let vue = new Vue({
data:{msg:’yjx’},
methods:{
    myFn:function(){
        console.log(this.msg);
}
}
});

```



### 18-Vue 常用指令-v-on 按键修饰符

1. 什么是按键修饰符？

可以通过按键修饰符监听特定按键触发的事件

 

2. 按键修饰符分类

2.1系统预定义修饰符

2.2 自定义修饰符

@keyup：键盘按下事件

常用：

```
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right

```

自定义按键修饰符别名（通过keyCodes）：

```
 Vue.config.keyCodes.f1 = 112
```



 说明：Vue.config.keyCodes.自定义名称= 原来按键对应的keyCodes值

```
本来是：
<input type=’text’ @keyup.112=”myFn”>
加入上述红色字体那一句之后就可以：
<input type=’text’ @keyup.f1=”myFn”>

```


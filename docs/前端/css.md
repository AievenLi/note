scss

npm install sass-loader node-sass --save-dev

npm : 无法加载文件 C:\Users\h12w8\AppData\Roaming\npm\cnpm.ps1，因为在此系统上禁止运行脚本。

###### element-ui

自定义表单查询审批流程，有啥作用
18600589271
gutter 间距
offset 偏移
type="flex" 对齐方式
align = “top middle bottom
justify="center" end space-between space-around
xs <768px
sm >768px
md >992px
lg>1200px
xl>1920px
基于断电的隐藏类：
hidden-xs-only - 当视口在 xs 尺寸时隐藏
hidden-sm-only - 当视口在 sm 尺寸时隐藏
hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏
hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏
hidden-md-only - 当视口在 md 尺寸时隐藏
hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏
hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏
hidden-lg-only - 当视口在 lg 尺寸时隐藏
hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏
hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏
hidden-xl-only - 当视口在 xl 尺寸时隐藏
el-collapse-transition 展开折叠
 <transition name="el-zoom-in-top"> bottom center 缩放

<transition name="el-fade-in-linear">淡入淡出

<el-container> 布局容器
<el-header> 顶栏容器
<el-aside> 侧边栏容器
<el-main> 主要区容器
<el-footer> 底栏容器

 

###### css

````
:root{
	--button-height:32px;
	--font-size:12px;
	--button-bg:white;
	--button-active-bg:#eee;
	--border-radius:4px;
	--color:#333;
	--border-color:#999;
	--border-color-hover:#666;
}
.g_button {
	font-size:var(--font-size);
	height:var(--button-height);
}
````

````css
css 一行文本超出...
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;

//多行文本超出显示
display:-webkit-box;
-webkit-box-orient:vertical;
-webkit-line-clamp:3;
overflow:hidden;

//IOS手机兼容滚动条滑动不流畅
overflow:auto;
-webkit-overflow-scrolling:touch;

//修改滚动条样式
隐藏div元素的滚动条
div::-webkit-scrollbar{
    display:none;
}

div::-webkit-scrollbar 滚动条整体部分
div::-webkit-scrollbar-thumb 滚动条里面的小方块，能向上向下移动，（或往左往右移动，取决与垂直滚动条还是水平滚动条
div::-webkit-scrollbar-track 滚动条的轨道（里面装有Thumb）
div::-webkit-scrollbar-button滚动条的轨道两端按钮，允许通过点击微调小方块的位置
div::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
div::-webkit-scrollbar-scrollbar-corner 边角，即两个滚动条的交汇处
div::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件注意此方案有兼容性问题，一般需要影藏滚动条时我都是用一个色块通过定位盖上去，或者将子级元素调大，父级元素使用overflow:hidden 截掉滚动条部分。暴力且直接

使用css写出一个三角形坐标
div {
    width: 0;
    height: 0;
    border: 5px solid #transparent;
    border-top-color: red;
}

6.解决 ios audio 无法自动播放、循环播放的问题

ios 手机在使用 audio 或者 video 播放的时候，个别机型无法实现自动播放，可使用下面的代码 hack。
// 解决ios audio无法自动播放、循环播放的问题
var music = document.getElementById('video');
var state = 0;

document.addEventListener('touchstart', function(){
    if(state==0){
        music.play();
        state=1;
    }
}, false);

document.addEventListener("WeixinJSBridgeReady", function () {
    music.play();
}, false);

//循环播放
music.onended = function () {
    music.load();
    music.play();
}

7.水平垂直居中

我一般只使用两种方式 定位 或者 flex，我觉得够用了。
div {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}

父级控制子集居中
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

8.隐藏页面元素

display-none: 元素不存在，从 dom 中删除
opacity-0: 元素透明度将为 0，但元素仍然存在，绑定的事件仍旧有效仍可触发执行。
visibility-hidden：元素隐藏，但元素仍旧存在，页面中无法触发该元素的事件。
9.前端工程化

一提到前端工程化很多人想到的都是 webpack，这是不对的，webpack 仅仅是前端工程化中的一环。在整个工程化过程中他帮我们解决了绝大多数的问题，但并没有解决所有问题。
前端工程化是通过工具提升效率，降低成本的一种手段。
近些年被广泛的关注和探讨，究其原因主要是因为现代化前端应用功能要求不断提高，业务逻辑日益复杂，作为当下互联网时代唯一不可或缺的技术，前端可以说是占据了整个开发行业的半壁江山。从传统的网站，到现在的 H5,移动 App,桌面应用，以及小程序。前端技术几乎是无所不能的全面覆盖。
在这些表象的背后呢，实际上是行业对开发人员的要求发生了天翻地覆的变化，以往前端写 demo，套模板，调页面这种刀耕火种的方式已经完全不符合当下对开发效率的要求，前端工程化就是在这样一个背景下被提上台面，成为前端工程师必备的手段之一。
一般来说前端工程包含，项目初始化，项目开发，集成，构建，打包，测试，部署等流程。工程化就是以工程的角度来解决这些问题。比如项目初始化我们一般使用npm init, 创建页面模板使用 plop，我们喜欢使用 ES6+开发，但是需要通过 babel 编码成 ES5，持续集成的时候我们使用 git，但是为了保持开发规范我们引入了 ESLint，部署一般使用 ci/cd 或者 jenkins 等等。
前端工程化是一个比较大的话题，后面我们会单开话题来讲。
10.contenteditable

html 中大部分标签都是不可以编辑的，但是添加了 contenteditable 属性之后，标签会变成可编辑状态。
<div contenteditable="true"></div>

不过通过这个属性把标签变为可编辑状态后只有 input 事件，没有 change 事件。也不能像表单一样通过 maxlength 控制最大长度。我也忘记我在什么情况下用到过了，后面想起来再补吧。
11.calc

这是一个 css 属性，我一般称之为 css 表达式。可以计算 css 的值。最有趣的是他可以计算不同单位的差值。很好用的一个功能，缺点是不容易阅读。接盘侠没办法一眼看出 20px 是啥。
div {
    width: calc(25% - 20px);
}

12.Proxy 和 Object.defineProperty 区别

Proxy 的意思是代理，我一般教他拦截器，可以拦截对象上的一个操作。用法如下，通过 new 的方式创建对象，第一个参数是被拦截的对象，第二个参数是对象操作的描述。实例化后返回一个新的对象，当我们对这个新的对象进行操作时就会调用我们描述中对应的方法。
new Proxy(target, {
    get(target, property) {

    },
    set(target, property) {

    },
    deleteProperty(target, property) {

    }
})

Proxy 区别于 Object.definedProperty。
Object.defineProperty 只能监听到属性的读写，而 Proxy 除读写外还可以监听属性的删除，方法的调用等。
通常情况下我们想要监视数组的变化，基本要依靠重写数组方法的方式实现，这也是 Vue 的实现方式，而 Proxy 可以直接监视数组的变化。
const list = [1, 2, 3];
const listproxy = new Proxy(list, {
    set(target, property, value) {
        target[property] = value;
        return true; // 标识设置成功
    }
});

list.push(4);

Proxy 是以非入侵的方式监管了对象的读写，而 defineProperty 需要按特定的方式定义对象的属性。
13.Reflect

他是 ES2015 新增的对象，纯静态对象也就是不能被实例画，只能通过静态方法的方式调用，和 Math 对象类似，只能类似 Math.random 的方式调用。
Reflect 内部封装了一系列对对象的底层操作，一共 14 个，其中 1 个被废弃，还剩下 13 个。
Reflect 的静态方法和 Proxy 描述中的方法完全一致。也就是说 Reflect 成员方法就是 Proxy 处理对象的默认实现。
Proxy 对象默认的方法就是调用了 Reflect 内部的处理逻辑，也就是如果我们调用 get 方法，那么在内部，proxy 就是将 get 原封不动的交给了 Reflect，如下。
const proxy = new Proxy(obj, {
    get(target, property) {
        return Reflect.get(target, property);
    }
})

Reflect 和 Proxy 没有绝对的关系，我们一般将他们两个放在一起讲是为了方便对二者的理解。
那为什么会有 Reflect 对象呢，其实他最大的用处就是提供了一套统一操作 Object 的 API。判断对象是否存在某一个属性，可以使用 in 操作符，但是不够优雅，还可以使用Reflect.has(obj, name); 删除一个属性可以使用 delete，也可以使用 Reflect.deleteProperty(obj, name); 获取所有属性名可以使用 Object.keys, 也可以使用 Reflect.ownKeys(obj); 我们更推荐使用 Reflect 的 API 来操作对象，因为他才是未来。
14.解析 get 参数

通过 replace 方法获取 url 中的参数键值对，可以快速解析 get 参数。
const q = {};
location.search.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>q[k]=v);
console.log(q);
15.解析连接 url

可以通过创建 a 标签，给 a 标签赋值 href 属性的方式，获取到协议，pathname，origin 等 location 对象上的属性。
// 创建a标签
const aEle = document.createElement('a');
// 给a标签赋值href路径
aEle.href = '/test.html';
// 访问aEle中的属性
aEle.protocol; // 获取协议
aEle.pathname; // 获取path
aEle.origin;
aEle.host;
aEle.search;
````

###### element scrollbar

/deep/ .el-scrollbar__wrap{

 overflow-x: hidden;

}



###### 破裂的图片



````

````

css的`伪元素`，之所以被称为伪元素，是因为他们不是真正的页面元素，html没有对应的元素，但是其所有用法和表现行为与真正的页面元素一样，可以对其使用诸如页面元素一样的css样式，表面上看上去貌似是页面的某些元素来展现，实际上是css样式展现的行为，因此被称为伪元素。如下图，是伪元素在html代码机构中的展现，可以看出无法伪元素的结构无法审查。

![img](http://segmentfault.com/img/bVb9y2)

css有一系列的伪元素，如:before，:after，:first-line，:first-letter等，本文就详述一下:before和:after元素的使用

#### 一、伪元素:before和:after用法

这个两个伪元素在真正页面*元素内部*`之前`和`之后`添加新内容（当然了，可以对伪元素应用定位可以置于任何位置）。可以用以下例子来说明：

```html
    <p>wonyun!</p>
    <style>
        p:before{content: "hello "}
        p:after{content: "you are handsome!"}
    </style>
```

上面例子从技术角度看，等价于下面的html结构：

```html
    <p>
        <span>hello </span>
        wonyun!
        <span> you are handsome!</span>
    </p>
```

由此可知：**伪元素:before和:after添加的内容默认是`inline`元素**；这个两个伪元素的`content`属性，表示伪元素的内容,设置:before和:after时必须设置其`content`属性，否则伪元素就不起作用。那么问题来了，`content`属性的值可以有哪些内容呢，具体有以下几种情况：

- `字符串`，字符串作为伪元素的内容添加到主元素中

  > **注意**：字符串中若有html字符串，添加到主元素后不会进行html转义，也不会转化为真正的html内容显示，而是会原样输出

- `attr(attr_name)`, 伪元素的内容跟主元素的某个属性值进行关联，及其内容为主元素的某指定属性的值

  > **好处**：可以通过js动态改变主元素的指定属性值，这时伪元素的内容也会跟着改变，可以实现某些特殊效果，如图片加载失败用一段文字替换。

- `url()/uri()`, 引用外部资源，例如图片；

- `counter()`, 调用计数器，可以不使用列表元素实现序号问题。

------

#### 二、:before和:after特点

上面说了，伪元素是通过样式来达到元素效果的，也就是说伪元素不占用dom元素节点，引用[:before,:after伪元素妙用](http://www.alloyteam.com/2015/04/beforeafter伪元素妙用/)里面总结的，:before和:after伪元素的主要特点如下：

- **伪元素不属于文档**，所以js无法操作它
- 伪元素属于主元素的一部分，因此**点击伪元素触发的是主元素的click事件**
- 原文说块级元素才能有:before, :after，其实是不妥的，大部分行级元素也可以设置伪元素，但是像img可替换元素，因为其外观和尺寸有外部资源决定，那么如果外部资源正确加载，就会替换掉其内部内容，这时伪元素也会被替换掉，但是当外部资源加载失败时，设置的伪元素是可以起作用的。

基于伪元素的特点可以知道其优缺点，也引用别人文章的话：

- 优点
  - 减少dom节点数
  - 让css帮助解决部分js问题，让问题变得简单
- 缺点
  - 不利于SEO
  - 无法审查元素，不利于调试

------

#### 三、:before和:after常见使用场景

1. 清除浮动

```
清除浮动是前端最常见的问题，有一种做法是使用一个空的页面元素如div来清除浮动，但是这种做法增加毫无语义的页面元素，而且占用dom节点。更可取的做法是利用伪元素来清除浮动：
            <div class="l-form-row">
                <div class="l-form-label"></div>
                ....
            </div>
            <style>
                .l-form-row:after {
                    clear: both;
                    content: "\0020";
                    display: block;
                    height: 0;
                    overflow: hidden
                }
            </style>
```

这样，class=l-form-row的元素内部任何浮动都能清除掉，不用额外添加无意义的元素。

1. 利用`attr()`来实现某些动态功能

在页面中常见这种问题，页面上加载的图片在无法加载时会显示一个破损图片，直接影响页面的美观；
![img](http://cdn2.w3cplus.com/cdn/farfuture/A2Bz5jXo1C3l2A3tc7h4QIkXhZ-eKXh8QjxO-f79fKQ/mtime:1468406046/sites/default/files/blogs/2016/1607/dirty-tricks3.png)

那么可以通过伪元素配合样式能够让未加载的图片看起来真的像破裂的效果，如下图所示：
![img](https://images2015.cnblogs.com/blog/408483/201608/408483-20160825213155866-395524514.png)

<img>是一个替换元素，其外观和尺寸是由外部资源来决定的，当外部图片资源加载失败时其会显示破裂图片和alt文字，尺寸仅由其自身内容决定。这时<img>元素可以使用伪元素:before和:after，因为其元素内容没有被替换；利用attr()来获取图片alt属性值作为伪元素:after的content内容来替换img的内容，并运用适当的样式从而完成：图片加载成功时显示正常的图片，加载失败时显示图片破裂效果的样式，具体代码参考：

```css
        img{
            min-height: 50px;
           position: relative;
        }
        img:before: {
             content: " ";
             display: block;
            position: absolute;
            top: -10px;
            left: 0;
            height: calc(100% + 10px);
            width: 100%;
            backgound-color: rgb(230, 230,230);
            border: 2px dotted rgb(200,200,200);
            border-radius: 5px;
        }
        img: {
            content: '\f127" " Broken Image of " attr(alt);
            display: block;
            font-size: 16px;
            font-style: normal;
            font-family: FontAwesome;
            color: rgb(100,100,100)
            position: absolute;
            top: 5px;
            left: 0;
            width: 100%;
            text-align: center;
        }
```

1. 与counter()结合实现序号问题，而不用使用列表元素。具体还要结合css的 counter-increment 和 counter-reset 属性的用法 。

代码如下：

```html
        <h2></h2>
        <h2></h2>
        <style>
            body {counter-reset:section;}
            h2:before { 
                counter-increment: section; 
                content: "Chapter"  counter(section) ".";
            }
        </style>
```

结果如下：
![img](https://images2015.cnblogs.com/blog/408483/201608/408483-20160825220412882-1283938733.png)

1. 特效使用

利用这两个伪元素，可以实现各种效果，如放大镜、叉叉、箭头、三角符等，也可轻易实现如下效果
![img](http://img1.dimpurr.com/dimblog/2013/10/6cc221614774e78add77d4e7a1171f591.gif)
代码实现如下：

```css
        a {
	    position: relative;
	    display: inline-block;
	    outline: none;
	    text-decoration: none;
	    color: #000;
	    font-size: 32px;
	    padding: 5px 10px;
        }

        a:hover::before, a:hover::after { position: absolute; }
        a:hover::before { content: "\5B"; left: -20px; }
        a:hover::after { content: "\5D"; right:  -20px; }
```

![img](http://cdn2.w3cplus.com/cdn/farfuture/1To616umvPEkmTcTiE_2FeVW3MraP89IwuzpzV1Z4E0/mtime:1468406052/sites/default/files/blogs/2016/1607/dirty-tricks7.gif)

代码实现如下：

```css
        table{overflow: hidden;}
        td, th{
            padding: 10px;
            position: relative;
            outline: 0;
        }
        td:hover::after,
        th:hover::after { 
              content: '';  
              background-color: lightblue;
              position: absolute;  
              left: 0;
              height: 10000px;
              top: -5000px;
              width: 100%;
              z-index: -1;
        }

        td:hover::before {
              background-color: lightblue;
              content: '';  
              height: 100%;
              top: 0;
              left: -5000px;
              position: absolute;  
              width: 10000px;
              z-index: -1;
        }
    
```

![img](http://7tszky.com1.z0.glb.clouddn.com/FvD_sYY4Fmp_yKS0E07H-5jhuKTB)
具体代码：

```css
        .empty__bg {
                display: inline-block;
                width: 95px;
                height: 92px;
                background: url(http://7tszky.com1.z0.glb.clouddn.com/FvD_sYY4Fmp_yKS0E07H-5jhuKTB) no-repeat;
                background-size: 95px 92px;
                position: relative;
                margin-bottom: 16px;/*注意这里需要留好位置放置after元素（它是absolute进去的）*/
            }
            .empty__bg:after {
                content: "暂无学习计划";
                display: block;
                font-size: 14px;
                line-height: 24px;
                text-align: center;
                width: 100%;
                color: #909090;
                position: absolute;
                top: 100%;
                left: 0;
            }
        }
```

![img](http://7tszky.com1.z0.glb.clouddn.com/Fv_HjtNCbR13N7bdbkeZY5RaSOTb)
上述可以实现`扩大可点击区域`，这对应手机用户来说更加友好一些，否则用户点击不会触发相应的事件；具体代码实现如下：

```css
        .play-cover {position: relative}
        .play-cover:before{
            content: "";
            display: block;
            position: absolute;
            width: 0;
            height: 0;
            border-left: 8px solid white;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            margin-left: 9px;
            margin-bottom: 7px;
            z-index: 5;
        }
        .play-cover:after{
            content: '';
            display: block;
            position: absolute;
            width: 20px;
            height: 20px;
            border: 2px solid white;
            background: rgba(0, 0, 0, .6);
            border-radius: 12px;
            background-clip: padding-box;
        }
```

CSS美化radio和checkbox的样式[magic-check](http://forsigner.com/magic-check/)，就是利用伪元素:before和:after来实现的；
具体是为每个真正的表单元素radio和checkbox搭配一个label，然后隐藏真正的radio和checkbox，label元素单击的时候隐藏的radio或者checkbox实际上是处于checked状态，这跟label的具体用法有关；利用label的伪元素:before和:after来实现美化radio和checkbox。



下面是checkbox的美化的css代码：

```css
        .magic-checkbox {
              position: absolute;
              display: none;  //先隐藏真正的checkboxbox
         }
         .magic-checkbox + label {//为与checkbox搭配的label使用样式
              position: relative; //相对定位，方便其内容的伪元素进行定位
              display: block; //块元素
              padding-left: 30px;
              cursor: pointer;
              vertical-align: middle; 
         }
        .magic-checkbox + label:before { //label添加:before伪元素，用于生成一个带边界的正方形，模拟复选框的轮廓
                position: absolute;
                top: 0;
                left: 0;
                display: inline-block;
                width: 20px;
                height: 20px;
                content: '';
                border: 1px solid #c0c0c0; 
                border-radius: 3px; 
            }
            //为checkbox添加:after伪元素，作用是生成一个√图形，模拟checkbox选中状态，未选中状态下会被隐藏
            .magic-checkbox + label:after {
                  top: 2px;
                  left: 7px;
                  box-sizing: border-box;
                  width: 6px;  //实现√图形很简单：设置一个长方形，去掉其上边界和左边界，剩下的2个边界旋转45度就得到√形状
                  height: 12px;
                  transform: rotate(45deg);
                  border-width: 2px;
                  border-style: solid;
                  border-color: #fff;
                  border-top: 0;
                  border-left: 0;
                  position: absolute;
                  display: none; //√形状先隐藏
                  content: '';
              }
            //单击label，隐藏的checkbox为checked状态，这时设置checked状态下搭配label的:before伪元素背景和边界颜色
             .magic-checkbox:checked + label:before {
                    animation-name: none; 
                    border: #3e97eb;
                    background: #3e97eb; 
                }
            //checked状态的checkbox搭配的label伪元素:after此时设置显示，那么√就显示出来了
             .magic-checkbox:checked + label:after {
                  display: block; 
             }
```

利用:before和:after能轻易实现美化的radio和checkbox

css<a>链接嵌套</a>

````

````

## 接嵌套

众所周之，在前端开发当中，超链接`<a>`标签嵌套`<a>`标签会出问题：浏览器解析的时候，将它们解析成不嵌套的。来看代码：

```
<a href="#url1">When the crisis was over,  <a href="#url2">Mr. Jones</a> left the region immediately.</a>
```

浏览器解析上面的HTML代码将会变成这样：

```
<a href="#url1">When the crisis was over,</a>  
<a href="#url2">Mr. Jones</a> 
left the region immediately.
```

如下图所示：

![链接嵌套](https://www.w3cplus.com/sites/default/files/blogs/2016/1607/dirty-tricks1.png)

而我们事实上需要的达到的效果是：

```
<a href="#url1">When the crisis was over,</a>  
<a href="#url2">Mr. Jones</a> 
<a href="#url1">left the region immediately.</a>
```

曾经为了达到这样的效果，我只能这样老实的写HTML代码，那么事实上呢？我们是存在一定的黑魔法的。**那就是给`<a>`标签内部的`<a>`标签外添加一个`<object>`标签。**如下所示：

```
<a href="#url1">When the crisis was over,  <object><a href="#url2">Mr. Jones</a></object> left the region immediately.</a>
```

最终浏览器达到的效果其实和下面的HTML代码效果一样：

```
<a href="#url1">When the crisis was over,</a> 
<a href="#url2">Mr. Jones</a> 
<a href="#url1">left the region immediately.</a>
```

当然，其结构未做任何改变，但效果是类似上面的代码效果。

![链接嵌套](https://www.w3cplus.com/sites/default/files/blogs/2016/1607/dirty-tricks2.png)

在线效果：

著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: https://www.w3cplus.com/css/dirty-tricks-dark-corners-front-end-pt1.html?from=timeline&isappinstalled=0 © [w3cplus.com](https://www.w3cplus.com/)



## CSS Scroll Snap 属性

````

````

###### css display

# 如何理解CSS的display属性

作者：静子 日期：2016-06-23 点击：9387

[CSS](https://www.w3cplus.com/blog/tags/68.html)

> **特别声明：**如果您喜欢小站的内容，可以点击[申请会员](https://www.zhi12.cn/paywall/membership/widget?uid=5491&siteid=s_64be3b00&cms=drupal&content_id=2610&callback=https%3A//www.w3cplus.com&source=https%3A//www.w3cplus.com%3Fq%3Dnode/2610&sign=ecbcc7859e33dea192cf9efdb6d2e61c)进行全站阅读。如果您对付费阅读有任何建议或想法，欢迎发送邮件至: **airenliao@gmail.com**!或添加QQ：874472854(^_^)

在布局中，`display`属性是最重要的CSS属性之一。其最常见的属性值有`block`,`inline`,`none`,`table`以及`inline-block`。最近的新宠为`flex`,因为它是专门为布局创建的`display`属性。新出现的`grid`(最近仍比较活跃)是另外一个指定的布局属性，其很快就会广泛被使用。

这篇文章比我预期的要长很多，你可以选择性进行阅读，但是我更希望你可以静下心来阅读整篇文章。

## 表内容

通过创建各种响应式设计，对于`display`以及`position`属性我学习到了很多，关于他们的工作原理以及如何和媒体查询相结合实现所需的布局。我会简短的介绍每一个值，并且会提及之前创建的与之有很强依赖性的一些响应式组件。

如果不涉及[盒子树(box tree)](https://drafts.csswg.org/css-display/#box-tree)我们是没有办法谈及这些属性的。浏览器基本上是通过生成盒子树解析CSS并进行相关渲染呈现，这里盒子树是指呈现文档的格式结构。`display`属性定义了盒子的显示类型。

关于浏览器如何进行渲染在屏幕上显示这个话题，真的令人十分陶醉。这里我建议你阅读[Talia Garsiel](http://taligarsiel.com/)书写的[浏览器工作原理: 现代web浏览器的幕后](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)。另外一篇必读的文章是[Fantasai](http://fantasai.inkedblade.net/)书写的[CSS布局演变: 始于1990年终于未来](http://fantasai.inkedblade.net/weblog/2012/css-layout-evolution/)，该作者目前在W3C CSS规范组工作。她曾有一个优秀的演讲：[用于企业会议的新兴技术](http://2016.phillyemergingtech.com/2012/)，如果你对视频不感兴趣，还有一篇相关文章讲解。

## 我们了解到的已经相当不错了

有趣的事实: 我们所使用的`display`属性值实际上有很大的限制。如:`block`在块流中有很大限制。请参考[规范](https://drafts.csswg.org/css-display/#propdef-display)获取完整的列表。

所有的元素都有一个默认的`display`值,但是均可以被显式设置所重写。

### display: none;

将元素与其子元素从普通文档流中移除。这时文档的渲染就像元素从来没有存在过一样，也就是说它所占据的空间被折叠了。元素的内容也会被屏幕阅读所忽略。

### display: inline;

![Inline Elements](https://www.w3cplus.com/sites/default/files/blogs/2016/1606/inline-640.jpg)

该元素生成一个或多个行内框。就如名字般，行内级元素所占具的空间就是他的标签所定义的大小。可以被视为对块级元素的补充。

### display: block;

![Block Elements](https://www.w3cplus.com/sites/default/files/blogs/2016/1606/block-480.jpg)

该元素生成块级框。除特殊声明外，所有的块级元素开始于新的一行，延展到其容器的宽度。

### display: list-item;

元素被渲染为列表项呈现的方式，确切说就像是一个块级元素，但是会生成一个可以被`list-style`属性进行样式修饰的标记框。只有`<li>`元素可以具有`list-style`的默认值。通常将`<li>`元素重置为默认行为。

### display: inline-block;

<iframe id="cp_embed_PNMxXL" src="https://codepen.io/huijing/embed/PNMxXL?height=460&amp;theme-id=9162&amp;slug-hash=PNMxXL&amp;default-tab=result&amp;user=huijing&amp;embed-version=2" scrolling="no" frameborder="0" height="460" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe " style="box-sizing: inherit; width: 2903.17px; overflow: hidden;"></iframe>

该元素生成一个块级别框，但是整个框的行为就像是一个内联元素。尝试在[Codepen](http://codepen.io/huijing/pen/PNMxXL/)书写此示例，改变窗口的大小，这样会更有意义。

## 一个响应式的数字计数

我创建的组件之一是针对不同旅客使用的数字叠加器。我得到了一个用于移动布局与一个用于桌面布局的静态的photoshop文件。但是他们都具有一个中间宽度以防“打破”布局。

这主要是由于括号内的文字没有很好的折叠在一起。所以我需要使用媒体查询进行宽度调整。使相关元素以不同的宽度显示。在[Codepen](http://codepen.io/huijing/full/LZPNYo/)中查阅全尺寸效果并观察该组件在不同宽度窗口的显示。

<iframe id="cp_embed_LZPNYo" src="https://codepen.io/huijing/embed/LZPNYo?height=320&amp;theme-id=9162&amp;slug-hash=LZPNYo&amp;default-tab=result&amp;user=huijing&amp;embed-version=2" scrolling="no" frameborder="0" height="320" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe " style="box-sizing: inherit; width: 2903.17px; overflow: hidden;"></iframe>

## 是否记住基于表格的布局?

这有一组`display`值允许你的元素表现类似于HTML表格。新加坡的开发人员[Colin Toh](https://twitter.com/p0larBoy)写了一篇优秀的[有关于`display`为表格属性的文章](http://colintoh.com/blog/display-table-anti-hero)，你应该认真看一下。

虽然我们大多数的人都不在使用基于表格的布局，`display: table`在一定的情况下还是十分有用的。如: 如果你想要在更广泛的布局上使用表格，但是在在较小宽度上保持典型的块布局。这可以同时结合媒体查询与`display`(为了采取更好的措施，使用伪元素)进行实现，仅需要调整窗口的大小观看实现的效果。

|        **table**         |       对应于HTML元素中的`<table>`。定义了一个块级框。        |
| :----------------------: | :----------------------------------------------------------: |
| **`table-header-group`** |                 对应于HTML元素中的`<thead>`                  |
|     **`table-row`**      |                   对应于HTML元素中的`<tr>`                   |
|     **`table-cell`**     |                   对应于HTML元素中的`<td>`                   |
|  **`table-row-group`**   |                 对应于HTML元素中的`<tbody>`                  |
| **`table-footer-group`** |                 对应于HTML元素中的`<tfoot>`                  |
| **`table-column-group`** |                对应于HTML元素中的`<colgroup>`                |
|    **`table-column`**    |                  对应于HTML元素中的`<col>`                   |
|   **`table-caption`**    |                对应于HTML元素中的`<caption>`                 |
|    **`inline-table`**    | 这是唯一没有直接映射到HTML元素的值。这个元素的表现形式将为表格HTML元素，但是是一个内联块而不是块级元素。 |

```
@media screen and (min-width: 720px) {
  .table {
    display: table;
    width: 100%;
    border-collapse: collapse;
  }
}

.tr {
  margin-bottom: 1.6rem;
}

@media screen and (min-width: 720px) {
  .tr {
    display: table-row;
  }
}

@media screen and (min-width: 720px) {
  .td {
    display: table-cell;
    border: #f0f0f0 1px solid;
    padding: 0.4rem;
  }
  .td:first-child {
    width: 11em;
  }
}

.th {
  font-size: 1rem;
  line-height: 1.6rem;
  font-family: "Palo Alto";
}

@media screen and (min-width: 720px) {
  .th {
    font-size: 1.294rem;
    line-height: 1.6rem;
  }
}

@media screen and (min-width: 720px) {
  .th {
    font-size: 0.8rem;
    line-height: 1.6rem;
    font-family: "Roboto Slab", Rockwell, serif;
    font-weight: 700;
  }
}

@media screen and (min-width: 720px) and (min-width: 720px) {
  .th {
    font-size: 1rem;
    line-height: 1.6rem;
  }
}

.th::before {
  content: 'display: ';
}

@media screen and (min-width: 720px) {
  .th::before {
    content: '';
  }
}

.th::after {
  content: ';';
}

@media screen and (min-width: 720px) {
  .th::after {
    content: '';
  }
}
```

## 块的新属性

[Tab Atkins Jr.](https://www.chenhuijing.com/blog/how-well-do-you-know-display/)是Flexbox以及网格规范的主要作者，关于新布局规范的显示模式提出了最突出的一点。

> Flexbox是一维布局 -- 用于任何需要在一条直线上显示的布局(或者是中断线，如果他们迂回在一起则会表现为单一的直线)。 网格是二维布局，它可以用于低功能的flexbox的替代品(我们已经测试过单一的行/列的形式十分近似于flexbox)，但是不可以用于完全替代。 - Tab Atkins Jr. [to www-style](https://lists.w3.org/Archives/Public/www-style/2013May/0114.html)

需要时刻牢记于心，在工作中使用这些新CSS布局，并在使用过程中对其充满了困惑。

### display: flex;

引入flexbox布局模块或CSS弹性框，标志着我们第一次有了专门为浏览器内容进行布局的规范。自从HTML被引入之后，网页内容布局已经演变了很多。当设计者想要创建一些富有创意的设计时，使用的第一种方法就是嵌套的HTML表格，或者我们所说的基于表格的布局。

当CSS开始升温的时候，我们转向了基于浮动的布局，通过将内容嵌套在不同的`div`中进行浮动实现想要的效果。基于浮动的布局仍然十分常见，但是随着时间的推移，所有当代浏览器均支持flexbox布局。我相信不久的将来基于flexbox与网格的布局将会成为布局的普遍方式。

这里我要引用Scott Vandehey的文章 - [什么是Flexbox？](http://spaceninja.com/2015/08/24/what-is-flexbox/)。这是其向Tab Atkins Jr.探索Flexbox历史时所书写的一篇文章。最早的草案规范日期为[2009年7月23日](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/)，但是讨论始于几年之前。

然而并没有什么正式的结构，各浏览器供应商也已经实现了flexbox，但是并没有真正的遵循规范。这也是为什么felxbox语法变得一团糟的原因(向后兼容一些老的浏览器时也是如此)。

flexbox模型是十分强大的，它可以实现很多功能，如果想要彻底搞明白flexbox的工作原理以及如何使用它，你需要多花点心思。flexbox以及网格布局需要长篇的文章进行深度覆盖，这里我列举了一些有关于flexbox的相关文章:

- [Flexbox 指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) -- Chris Coyier
- [Flexbox所处理的](https://philipwalton.github.io/solved-by-flexbox/) -- [Philip Walton](http://philipwalton.com/)
- [Flexbox Froggy](http://flexboxfroggy.com/) -- [Thomas Spark](http://thomaspark.co/)
- [使用CSS弹性框](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) -- Mozilla Developer Network
- [CSS Flexbox 规范 (草案)](https://drafts.csswg.org/css-flexbox/)

![Felxbox 关系图](https://www.w3cplus.com/sites/default/files/blogs/2016/1606/flex-diagram.svg)

> 有关于Flexbox更多的教程，可以[猛击这里阅读](http://www.w3cplus.com/blog/tags/157.html)。

在一个元素上声明`dispaly: flex`，它就会变为flex容器，同时它的子元素就会变为flex项。这不会被继承即其子元素的下一代不会具有felx属性。flex容器和flex项都有各自的flex属性。

再次强调，我希望你认真查阅上述有关于flexbox的资源列表，这将会有助于你更好地理解并使用flexbox。

#### flex容器属性

| **`flex-direction`**  | 定义了主轴以及flex项的方向。[`flex-direction`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) |
| :-------------------: | :----------------------------------------------------------: |
|    **`flex-wrap`**    | 指定flex项的调整，单行显示亦或允许多行显示。[`flex-wrap`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) |
|    **`flex-flow`**    | `flex-direction`以及`flex-wrap`属性的补充。[`flex-flow`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow) |
| **`justify-content`** | 定义flex项沿主轴分布时的间隙大小。[`justify-content`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) |
|   **`align-items`**   | 定义flex项在垂直主轴分布时的间隙大小。[`align-items`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) |
|  **`align-content`**  | 指定行flex项在flex容器内如何分布，如果flex项为单独一行则不适用。[`align-content`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) |

#### flex项的相关属性

|   **`order`**    | 指定flex项的布局顺序，按顺序值进行升序，若值相同根据源顺序进行布局。[`order`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/order) |
| :--------------: | :----------------------------------------------------------: |
| **`flex-grow`**  | 若有足够空间，定义元素是否可扩展，根据此值确定该元素扩展的空间比例(这有些小复杂)。[`flex-grow`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) |
| **`flex-shink`** | 若没有足够空间，定义元素是否可缩小，该值决定了元素可缩小的比例。[`flex-shink`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) |
| **`flex-basis`** | 制定了flex项在主轴方向上的输出大小。[`flex-basis`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) |
|    **`flex`**    | `flex-grow`,`flex-shrink`,`flex-basis`属性的补充。[`felx`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) |
| **`align-self`** | 指定单个flex项的被重写的对齐方式。[`align-self`值的完整列表](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) |

### display: grid;

任何有关网格布局的，我都会去参考[Rachel Andrew](https://rachelandrew.co.uk/) - 我认为她是CSS网格大师。她一直在带头努力提高人们对这个新的`display`属性的认识，通过一些演讲，文章以及教程。

CSS网格使我们可以创建网格系统并且可以纯粹使用CSS控制网格项的定位，实现了与HTML的分离。当结合使用媒体查询时，CSS网格变成了一个有用的工具用于设计并创建一些灵活的布局。

当前的[CSS网格布局模块1](https://drafts.csswg.org/css-grid/)草案始于[2011年](http://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/)。像flexbox，本规范的成熟需要一个用于布局的适当的方法，奠定网页内容而不损害HTML语义。

注意，虽然Microsoft Edge以及Internet Explorer可以使用`-ms-`实现旧版本浏览器的支持，CSS网格还没有在所有的浏览器中实现。这并不足以为奇，因为最原始的网格规范的编辑大部分来自于Microsoft。

在flexbox规范凌乱的实施之后，正在发展的CSS网格采取了不同的做法。浏览器供应商使用不同的供应商前缀将正在实验的功能添加到浏览器中以便于开发人员的测试。这十分有助于规范的制定，并且在正式规范形成之前找到所有的缺陷。

为了这样子实施，CSS网格发展了一个标记。它必须由开发人员手动启动。在Chrome和Opera中，分别导航到`chrome://flags`和`opera://flags`，并启动“网页实验平台功能”。对于 Firefox，导航到`about:config`并将`layout.css.grid.enabled`以及`layout.css.grid-template-subgrid-value.enabled`设置为true。

#### CSS网格的关键术语

| **Grid Container** | 相似于flex容器的概念，元素声明为`display: grid;`。其直接后代(子元素)为网格项 |
| :----------------: | :----------------------------------------------------------: |
|   **Grid Item**    | 如果父元素为`display: grid;`, 那么这个元素就被视为网格项。网格项的子元素不被视为网格项。 |
|   **Grid Track**   |                     可以为网格的行或列。                     |
|   **Grid Line**    |         定义网格结构的线，被视为网格轨道之间的界限。         |
|   **Grid Cell**    |   单个的网格单元，由相邻的水平和垂直的网格线所包围的空间。   |
|   **Grid Area**    |          最酷的一部分。由多个网格单元格组成的区域。          |

试图用简短的语言概述网格真的是一件十分具有挑战的事情。请参考一下资源，并尝试使用CSS网格进行实现。事实上，你可以现在进行[网格相关实验](http://gridbyexample.com/)并且查看Codepen有关于网格不同用例的相关链接的演示。

- [深入探索网格布局的位置](http://blogs.igalia.com/mrego/2016/02/01/deep-dive-into-grid-layout-placement/) -- [Manuel Rego Casasnovas](http://blogs.igalia.com/mrego/)
- [Grid指南](https://css-tricks.com/snippets/css/complete-guide-grid/) -- [Chris House](http://chris.house/)
- [网格示例](http://gridbyexample.com/) -- [Rachel Andrew](https://rachelandrew.co.uk/)

> 有关于Grid更多的教程，可以[猛击这里阅读](http://www.w3cplus.com/blog/tags/355.html)。

## 相对模糊并处于实验性的

### display: run-in;

这是十分有趣的一个，我之前都不知道它的存在知道我阅读了[CSS display 规范](http://www.w3.org/TR/css-display-3/)。并且我也阅读了2010文章，[Chris Coyier](http://chriscoyier.net/)书写的[CSS Run-in Display值](https://css-tricks.com/run-in/)。不幸的是，浏览器厂商不喜欢这种规范已被移除，这样你就可以认为这是一个备用的现实规范。

事实上，你将一个元素的`display`属性设置为`run-in`,就会渲染一个`run-in`框。用例就是使用本地方法创建一个run-in标题，这在平面设计中的说法是和正文位于同一行的标题。

Sameen Shaw.Also known asIndigo Five Alpha,Dr. Sameen Shawor simplyShaw, is a physician and aformer operative for the U.S. ArmyIntelligence SupportActivity. Prior to joining the team Shaw was part of anoperation known as Catalyst Indigo, responsible for actingon relevant list intelligence delivered bythe Machine, whichshe knew only as "Research".

你可以使用浮动实现相似效果，但是被视为一个hack方法。将标题的基线定位到正文基线上是具有挑战性的，你需要调整标题字体大小以及正文的行高使之相匹配。并有可能出现标题多余一行的情况。

如果你将标题的设置为`display: inline`,除非你将标题嵌套在段落元素内(`p`为块元素)，否则它不会工作的。但是这又会出现语义上的错误。就我个人而言我希望看到其可以实现，但是我想那时浏览器厂商会有更多的担忧。

### display: ruby;

介绍这一特定属性之前需要首先介绍一下`<ruby>`元素。简单地说，有一种元素用于在文本基线旁的注释，通常是帮助发音。这对于东南亚语言是十分常见的，如汉语或者日语。我所研究的大多数文章是2010年左右，所以我使用`<ruby>`书写了[2016的状态](https://www.chenhuijing.com/blog/html-ruby/)。

`display:ruby;`和`display:table;`有很大的相似之处，但是规范不鼓励将ruby值应用到非ruby元素上，如使用`span`显示ruby文本。相反，我们应该使用HTML ruby元素，所以屏幕阅读器和非CSS渲染器可以解析ruby结构的内容。

|        **ruby**         | 对应于HTML元素中的`<ruby>`，它将生成一个ruby容器框，产生一个ruby格式上下文用于标记为内部ruby框的子元素。 |
| :---------------------: | :----------------------------------------------------------: |
|      **ruby-base**      | 对应于HTML元素中的`<rb>`,ruby格式上下文中的一个内部ruby框。  |
|      **ruby-text**      |    对应于HTML元素的`<rt>`,ruby格式上下文中的内部ruby框。     |
| **ruby-base-container** |  对应于HTML元素的`<rbc>`,ruby格式上下文中的一个内部ruby框。  |
| **ruby-text-container** | 对应于HTML元素中的`<rtc>`,ruby格式上下文中的一个内部ruby框。 |

### display: contents;

> 元素本身不会产生任何框，但是其子元素和伪元素可以正常生成框。为了框的生成和布局，需要将元素处理为好像和子元素或者伪元素一样处于文档树中。 - CSS Display Module Level 3

规范想表达的是，当你将一个元素设置为`display:contents`,它就会从DOM中消失，但是其子元素会保留并且占据空间。不幸的是，本规范现在仅仅得到了火狐的支持。在火狐浏览器下，调整全尺寸的[Codepen](http://codepen.io/huijing/full/wWWzmd/)来感受其效果。

<iframe id="cp_embed_wWWzmd" src="https://codepen.io/huijing/embed/wWWzmd?height=319&amp;theme-id=9162&amp;slug-hash=wWWzmd&amp;default-tab=result&amp;user=huijing&amp;embed-version=2" scrolling="no" frameborder="0" height="319" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="CodePen Embed" class="cp_embed_iframe " style="box-sizing: inherit; width: 2903.17px; overflow: hidden;"></iframe>

我已经尝试概述迄今为止谈及该属性的两篇文章，[Sam Rueby](https://samrueby.com/)书写的[火狐所支持的CSS属性 - dispaly:contents](https://samrueby.com/2015/02/09/firefox-is-releasing-support-for-css-display-contents/)以及[Rachel Andrew](https://rachelandrew.co.uk/)书写的[display:contents与消失的的框](https://rachelandrew.co.uk/archives/2016/01/29/vanishing-boxes-with-display-contents/)。Rachel Andrew还介绍了使用`flex-items`书写的有关于这个属性的一个神奇的用例。

## 总结

这篇文章的长度超出了我的预期，如果你阅读到此，我要表示真挚的感谢。我很高兴不久的将来我们就可以在不使用hack的情况下使用这些布局。同时，希望这篇文章可以帮助你了解到更多有关于CSS布局相关的知识

著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: https://www.w3cplus.com/css/how-well-do-you-know-display.html © [w3cplus.com](https://www.w3cplus.com/)



### 动画

`````
animation-name: 时间曲线
animation-duration 动画的时长
animation-timing-function 动画的时间曲线
animation-delay 动画开始前的延迟
animation-iteration-count 动画的播放次数
animation-direction 动画方向

@keyframes mykf {
 0%{top:0,transition:top ease}
 50%{top:30px;transition:top ease-in}
 75%{top:1px; transittion:top ese-out}
 100%{}
}

transition-property 要变换的属性
transition-duration 变换的时长
transition-timing-funciton 时间曲线
transittion-delay 延迟
`````

修改内部样式

.changeNav >>> **.vp-radio-button–small .vp-radio-button__inner** {
width: 100%;
}



###### 常用css类


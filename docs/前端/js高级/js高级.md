
# JavaScript

## JS 词法、类型
https://www.fileformat.info/info/unicode/block/index.htm

https://www.fileformat.info/info/unicode/category/Zs/list.htm   | 分隔符空格

https://home.unicode.org/

````


### 预备知识：[unicode](https://www.fileformat.info/info/unicode/) 字符集

- [Blocks](https://www.fileformat.info/info/unicode/block/index.htm) 编码组

  - 0 ~ U+007F：常用拉丁字符
    - `String.fromCharCode(num)`
  - U+4E00 ~ U+9FFF：CJK ChineseJapaneseKorean三合一
    - 有一些增补区域（extension）
  - U+0000 - U+FFFF：[BMP]([https://zh.wikipedia.org/wiki/Unicode%E5%AD%97%E7%AC%A6%E5%B9%B3%E9%9D%A2%E6%98%A0%E5%B0%84](https://zh.wikipedia.org/wiki/Unicode字符平面映射)) 基本平面

- [Categories](https://www.fileformat.info/info/unicode/category/index.htm)

  - [space空格系列](https://www.fileformat.info/info/unicode/category/Zs/list.htm)

- 实践

  - 中文变量名

    因涉及到文件的编码保存方式，使用 `\u十六进制unicode`转译（`'厉'.codeCodeAt().toString(16)`）

### Atom 词

#### InputElement

- whiteSpace

  可查阅 unicode [space列表](https://www.fileformat.info/info/unicode/category/Zs/list.htm)

  - Tab：制表符（打字机时代：制表时隔开数字很方便）
  - VT：纵向制表符
  - FF: FormFeed
  - SP: Space
  - NBSP: NO-BREAK SPACE（和 SP 的区别在于不会断开、不会合并）
  - ...

- LineTerminator 换行符

  - LF: Line Feed `\n`
  - CR: Carriage Return `\r`
  - ...

- Comment 注释

- Token 记号：一切有效的东西

  - Punctuator: 符号 比如 `> = < }`
  - Keywords：比如 `await`、`break`... 不能用作变量名，但像 getter 里的 `get`就是个例外
    - Future reserved Keywords: `eum`
  - IdentifierName：标识符，可以以字母、_ 或者 $ 开头，代码中用来标识**[变量](https://developer.mozilla.org/en-US/docs/Glossary/variable)、[函数](https://developer.mozilla.org/en-US/docs/Glossary/function)、或[属性](https://developer.mozilla.org/en-US/docs/Glossary/property)**的字符序列
    - 变量名：不能用 Keywords
    - 属性：可以用 Keywords
  - Literal: 直接量
    - Number
      - 存储 Uint8Array、Float64Array
      - 各种进制的写法
        - 二进制0b
        - 八进制0o
        - 十进制0x
      - 实践
        - 比较浮点是否相等：Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON
        - 如何快捷查看一个数字的二进制：(97).toString(2)
    - String
      - Character
      - Code Point
      - Encoding
        - unicode编码 - utf
          - utf-8 可变长度 （控制位的用处）
      - Grammar
        - `''`、`""`、``` `
    - Boolean
    - Null
    - Undefind
````

将中文转义为uncode

```
"厉害".codePointAt(0).toString(16)
"厉害".codePointAt(1).toString(16)
var \u5389\u5bb3 = 1
```

$nbspl

```
插入添加空格换行也不会分开词 ，处理排版
控制台打开"\u00A0" 复制粘贴到编辑器
淘宝前面加空格 bom 格式
```

````
InputElement
 whiteSpace
 LineTerminator
 Comment
 Token
 	Identifer
 	Punctuator
 	Literal
 	Keywords
````

###### 浮点数 float

````
精度缺失
````

##### 表达式Atom Grammar Runtime

跟运算优先级同级 

````
Expressions 
Member
a.b
a[b]
foo `string`
super.b
super['b']
new.target
new foo()
````

````
js 回车不自增
var a =1,b=1,3=1
a
++
b
 ++
c
log(abc,122)


````

````
undefined 表达用 void 0;

IFE 自执行函数  创建10个button

for(var  i =0 ;i <10;i++){
var button = document.createElement(button)
document.body.appendChild(button)
button.innerHtml = i 

void function(i){
	button.onclick = function (){
   log i
}
}(i)
}
````





````js
function StringToNumber(){

}

function NumberToString(){
    
}


````

声明

````js
//FunctionDeclaration
//GeneratorDeclaration
function* gen(){
            yield 1;
            yield 2;
            var i = 3
            while(true){
                yield i ++
            }
        }
        gen.next()
        gen.next()

//AsyncFunctionDeclaration
//AsyncGeneratorDeclaration

        
````

## css

css分类getComputedStyle(document.body)

layout

​	display 

​	posittion

interactive

render/draw

svg

other





## HTML

 HTML的定义：XML与SGML

Browser API {

...Crypto

web Animation

Bom

CSSOM

DOM

 DOM tree

 Events

​	Range

}



导航类操作

parentNode 

childNodes

firstChild

lastChild

nextSibling

previousSibling

parentElement

children

firstElementChild

lastElementChild

nextElementSibling

previousElementSibling

修改操作

appendChild

insertBefore

removeChild

replaceChild

 

## Range API

var range = new Range()

range.setStart(element,9)

.setEnd(element,4)

var range = document.getSelection.getRangeAt(0)

range.extractContents()



range.setStartBefore 

range.setEndBefore

range.setStartAfter

range.setEndAfter

range.selectNode

range.selectNodeContents

````js

<div id="a">
  <span>1</span>
  <p>2</p>
  <a>3</a>
  <div>4</div>
</div>
<script>
  let element = document.getElementById("a");
  function reverseChildren(element) {
    // let children = Array.from(element.childNodes);
    // children = Array.prototype.slice.call(element.childNodes);
    // for (let child of children) {
    //   element.removeChild(child);
    // }
    // children.reverse();
    // for (let child of children) {
    //   element.appendChild(child);
    // }
    //第二种方法
    // let l = element.childNodes.length;
    // while (l-- > 0) {
    //   element.appendChild(element.childNodes[l]);
    // }
    //最佳方法
    let range = new Range();
    range.selectNodeContents(element);
    let fragment = range.extractContents();
    var l = fragment.childNodes.length;
    while (l-- > 0) {
      fragment.appendChild(fragment.childNodes[l]);
    }
    element.appendChild(fragment);
  }
  reverseChildren(element);
</script>


````

## cssom

document. styleSheets

````
<style title="hello">
a{
  color:red;
}
</style>
<link rel="stylesheet" title="x" href="data:text/css,p%7Bcolor:blue%7D">
document.styleSheets[0].cssRules
document.styleSheets[0].insertRule("p{color:pink;}",0)
document.styleSheets[0].removeRule(0)
document.styleSheets[0].cssRules[0].style.color = "lightgreen"


 getComputedStyle
 window.getComputedStyle(elt,pseudoElt) 
  ~elt 想要获取得元素
  ~pseudoElt 可选，伪元素
  



````

###### window API    做拖拽

````
let childWindow = window.open("about:blank","_blank")
let childWindow = window.open("about:blank","width=100,height=100,left=100,top=100")
childWindow.moveBy(-50,-50)
childWindow.resizeBy(50,50)
window.moveBy(30,30)

window.scroll(0,30)
window.scroll(0,0)
window.scrollBy(0,50)
window.scrollx()
window.scrolly()
//查看css样式有几个核
$0.getClientReacts()
$0.getBoundingClientRect() //实际渲染面积

视口尺寸
window.innerHeight
window.innerWidth 
document.documentElement.getBoundingClientRect() 

window.outerwidth
window.innerHeight - window.innerWidth
window.devicePixelRatio dpr // 物理像素跟实际像素比值








````



DOM所有api

````
<script>
let names = Object.getOwnPropertyNames(window)
let js = new Set()
//ECMA262
let objects = ['globalThis','console','BigInt','BigInt64Array','BigUint64Array','Infinity','undefined','eval','Uint8Array','Uint16Array','Uint32Array','Uint8ClampedArray','Atomics','JSON','Math','Reflect','escape','unescape'] 
Objects.forEach(o=> js.add(o))
names = names.filter(e=> !js.has(e))

</script>
https://websockets.spec.whatwg.org/

````






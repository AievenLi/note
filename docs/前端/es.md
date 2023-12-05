let 

不属于顶层对象window

不允许重复申明

不存在变量提升

暂时性死区

块级作用域

for (var i=0;i<3;i++){

(function(j){

setTimeout(function(){

console.log(j)

}) 

})(i)

}

闭包特点：

有一个外部函数还有一个内部函数，

内部函数会调用内部函数的变量	

能保证 外部函数的状态不被释放

const 

栈内存

str

number

引用地址  Array,Object

Object.freeze(obj) 冻结obj 只能冻结对象



````js
let user={
    name:'haiwen',
    age:32
}
let {age:uage,name:uname} = user
console.log(uage,uname)
````

数组去重

````js
let res = arr.reduce(function(prev,cur){
    prev.indexOf(cur) == -1 && prev.push(cur)
    return
})
````

````js
find（ 返回value）  findIndex()返回索引

for(let item of arr.keys()) {

console.log(item)

}

for (let item of values()){

console.log(item)

}
for(let [index,item] of arr.entries()){
    console.log(index,item)
}
instanceof Array 是否为数组的实例
 
//slice 伪数组转化数组
let arr = Array.prototype.slice.call(divs3)
//转化成真正的数组
Array.from()
//元素组成新数组
Array.of()
//替换数组元素
arr.copyWithin(替换从哪里开始，往后替换)
//填充数组
let arr=new Array(3).fill(7)
//从1开始替换到3
arr.fill('iccc',1,3)


改变this,指向
let oBtn  = document.querySelector('#btn')
oBtn.addEventListener('click',function(){
     cosole.log(this)
    setTimeout(function(){
        console.log(this)
    }.bing(this),1000)
})

this指向定义时所在的对象，而不是调用时所在的对象
不可以当作构造函数
不可以使用arguments 对象


对象的扩展
属性简介表示法
属性名表达式
Object.is()
扩展运算符与Object.assign()
in
对象的遍历方式

遍历对象
Object.getOwnPropertyNames(obj).forEach(key = >{
    console.log(key,obj[key])
})
for(let key in obj){
    console.log(key,obj[key])
}
Object.keys(obj).forEach(key = >{
     console.log(key,obj[key])
})
for(let key of Object.keys(user)){
    console.log(key)
}
for (let key of Object.getOwnPropertySymbols){
    console.log(key)
    //只能获取Symbols属性
}
for (let key of Reflect.ownKeys(user)){
    console.log(key)
    //普通属性和Symbols 
}
````



````js
Symbol全局
-->私有静态属性
-->let s1 = Symbol('foo') 
  let s1 = Symbol.for('foo') //同一个值
    si.description  //获取Symbol简介

//保证key不冲突
const stu1 = Symbol('李四')
const stu2 = Symbol('李四')
const grade = {
    [stu1]:{address:'yyy',tel:'222'},
    [stu2]:{3'}
}
console.log(grade[stu1])
console.log(grade[stu2])
//保护属性
const SYM = Symbol('imooc')
class User{
    constructor(name){
        this.name = name
        this[sym] = 'baidu.com'
    }
    getName() {
        return this.name + this[sym]
    }
}
const user = new User('xiechneg')
console.log(user.getName())
for (let key in user){
    
}
const shapeType = {
    triangle:Symbol(),
    circle: Symbol()
}
function getArea(shape){
    let area = 0
    swith(shape){
       case shapeType.triangle:
        area = Sy
        break
       case shapeType.circle
        area = 2
        break
    }
    return area
}
getArea(shapeType.triangle)


````

````js
set

let s = new Set([1,2,3,2])
//唯一的不可重复的

s.add('imooc').add('es')
s.delete(2)
s.clear()
console.log(s.has('imooc'))
console.log(s.size)
let arr1 = [1,2,3,4,5,6]
let arr2 = [2,3,4,5,6]
let s = new Set([...arr1,...arr2])
//交集
let s1 = new Set(arr1)
let s2 = new Set(arr2)
let arr3 = new Set(arr1.filter(item => !s2.has(item)  ))
let arr4 = new Set(arr2.filter(item => !s1.has(item)  ))
console.log([...arr3,...arr4 ])


let ws = new WeakSet()
const obj1 = {
    name:'baidu'
}
const obj2 = {
    age :14
}
ws.add(obj1)
ws.add(obj2)
ws.delete(obj1)
console.log(ws)
console.log(ws.has(obj2))
不可遍历

````

````js
垃圾回收机制 GC	+1 +1 不为0 不会释放
weakset 弱引用

const str = 'baidu'
console.log(str.startsWith('im'))
console.log(str.endsWith('mooc'))
str.repeat(10)
会返回新的字符串 
String.fromCodePoint()
Unicode表示法增多
includes（）

````

````js
//i(忽略大小写) m(多行匹配) g(全局匹配)
//y(粘连修饰符) //u(unicode)
reg1 = /a+/g //每次匹配剩余的
reg2 = /a+/y //剩余的第一个开始匹配
console.log(reg1.exec(str))
//范围 \u0000~\uffff
const str = '\uD842\uDFB7' //表示一个字符
console.log(/^\uD842/.test(str)) //es5 true
console.log(/^\uD842/u.test(str)) //es6 false

//.除了换行符以外的任意单个字符
console.log(/^.$/.test(str)) //false
console.log(/^.$/u.test(str)) //true

console.log(/\u{61}/.test('a')) //false
console,log(/\u{61}/u.test('a')) //true

console.log(/\吉{2}/.test(’吉吉‘))  //false
console.log(/吉{2}/u.test('吉吉')) //true
//判断是否是整数
Number.isInteger()
//判断有限
Number.isFinite(5)
Number.isFinite(0.5)
Number.isFinite(Infinity)  //false
Number.isFinite('imooc') //false
Number.isFinite(true) //false
//判断是不是NaN
Number.isNaN()
Math.trunc(5.5) //去除小数部分，返回整数部分
Math.trunc(-5.5)
Math.trunc(true) //1
Number.parseInt(5.5)
Number.parseInt(-5.5)
Number.parseInt(true) //NaN

Math.sign(5)//判断是否正数 
Math.cbrt(8) //计算立方根 //2

Object.getOwnPropertyNames(obj)  //获取除去Symbol的键名
Object.getOwnPropertySymbols(obj) //获取Symbol的键名
Object.keys(obj) //除去Symbol没有的k键名
//代理
userinfo = new Proxy(userinfo,{
    ownKeys(target){
        return Object.keys(target).filter(key=>!key.startsWith('_'))
    }
})
get(){}
set(){}
ownKeys(target,val){
    
}
let User = class {
     constructor(name){
         this.name = name
     }
}
User = new Proxy(User,{
    construct(target,args,newTarget){
        return new target(...args)
    }
})
console.log(new User('imooc'))


Proxy
//拦截器
get 拦截对象属性的读取，比如proxy.foo和proxy['foo']

set 拦截对象属性设置，返回布尔值，比如proxy.foo = v 或 proxy['foo'] =v

has 拦截propKey in proxy的操作，返回一个布尔值

ownKeys 拦截Object.getOwnPropertyName(proxy),
ObjectgetOwnPropertySymbols(proxy)，Object.keys(proxy),
for ... in 循环，返回一个数组
    
deleteProperty 拦截delete proxy[propKey]的操作，返回一个布尔值

apply 拦截函数的调用，call和apply操作

construct 拦截new命令，返回一个对象
````





###### 类与继承

````
super()
extends
instanceof 监测实例
static 静态类
````

###### es6导出导出

````js
   require 和 import，都是为了JS模块化使用。最近项目中，因为多人协同开发，出现了一个项目中同时使用了require 和 import 引入依赖的情况。正常情况下，一个项目中最好是对引入方式做一个规范。下面我们就来看一下require 和 import的区别：

一.require
  require是Commonjs的规范，node应用是由模块组成的，遵从commonjs的规范。用法：

  a.js

function test (args) {
  // body...
  console.log(args);	
}
 
module.exports = {
  test
};
b.js

let { test } = require('./a.js');
 
test('this is a test.');
    require的核心概念：在导出的文件中定义module.exports，导出的对象类型不予限定（可为任意类型）。在导入的文件中使用require()引入即可使用。本质上，是将要导出的对象，赋值给module这个对象的exports属性，在其他文件中通过require这个方法来访问exports这个属性。上面b.js中，require(./a.js) = exports 这个对象，然后使用es6取值方式从exports对象中取出test的值。

二.import
import是es6为js模块化提出的新的语法，import （导入）要与export（导出）结合使用。用法：

a.js:

export function test (args) {
  // body...
  console.log(args);	
}
 
// 默认导出模块，一个文件中只能定义一个
export default function() {...};
 
export const name = "lyn";
b.js:

// _代表引入的export default的内容
import _, { test, name } from './a.js';
 
test(`my name is ${name}`);
三、commonjs模块与ES6模块的区别
    1.commonjs输出的，是一个值的拷贝，而es6输出的是值的引用；

    2.commonjs是运行时加载，es6是编译时输出接口；

````


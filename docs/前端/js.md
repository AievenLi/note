````

````

###### js常用操作符

`````js
一、一元加减操作符
        1、数字加减

         一元加操作符：
         相当于使用Number()函数对变量进行转换。

         一元减操作符：与加类似，只是会在结果前面多一个负号

         2、字符串和数字

         字符串和数字：加则拼接，减则转数字相减。

         字符串和字符串：加则拼接，减则转数字相减。

         无法转成数字时则为NaN

 二、相等操作符

         1、先进行类型转换再比较

         2、NaN != NaN

         3、null == undefined

         4、[ ] == false ? true : false;

         结果为true!

         1）空数组转换为数字0

         数组继承了默认的valueOf()方法，这个方法返回一个对象而不是一个原始值，因此，数组到数字的转换则调用toString()方法。空数组转换为空字符串，空字符串转换为数字0。

         2）布尔值转换为0、1
         
 三、void操作符

         1、void是JavaScript里面的一元操作符

         2、作用

         1）void(0) === undefined 为真，undefined不是保留字，用void0可以替代。

         2）href=”javascript:void(0)”，阻止a标签点击跳转。
  四、typeof操作符

         1、基本值

         6种：string,number,boolean,undefined,object,
         function
			2、易出错的数据类型
            typeof undefined //undefined
            typeof null // object 没有null类型
            typeof function //function 函数不是object类型

 五、instanceof操作符

 instanceof操作符：当a的原型为b，b原型为c时，a既是b的instance也是c的

六、in操作符

         用来检测数组索引或者对象属性。

         var trees = new Array("redwood", "bay", "cedar", "oak", "maple");

         0 in trees        // 返回true

         3 in trees        // 返回true

         6 in trees        // 返回false

         "bay" in trees    // 返回false (
         必须使用索引号,而不是数组元素的值)

         "length" in trees // 返回true (length是一个数组属性)

         Symbol.iterator in trees // 返回true (数组可迭代，只在ES2015+上有效)// 内置对象

         "PI" in Math          // 返回true

         // 自定义对象

         var mycar = {make: "Honda", model: "Accord", year: 1998};

         "make" in mycar  // 返回true
          →属性必须用双引号！

         "model" in mycar // 返回true

 

 
`````





### 1. Array 转Map

###### 数组转array

````js
	let arr = [

  {type:'1',name:'name1'},

  {type:'2',name:'name2'}

];

// convert array data to map

let newmap=arr.map(i =>

  [i]

);

//[[{"type":"1","name":"name1"}],[{"type":"2","name":"name2"}]]

````

````js
let arr = [{count:1,name:'test1'},{count:2,name:'test2'}];
let average = arr.reduce((sum,value)=>sum+value.count,0)/arr.length;
console.log(average)

````

### 2. ES6 Array average

```js
let average = array.reduce((sum,value)=>sum+value,initValue)/array.length
```



### 2. Array reduce sum

`````js
// create array data
let arr = [
                {type:'1',count:1},
                {type:'2',count:2}
           ];
// sum count value
let sum  = reduce((accumulator, currentValue)=>accumulator+currentValue.count,0);
`````

````js
slice(start，end)

从start开始截取到end但是不包括end
返回值为截取出来的元素的集合
原始的数组不会发生变化
//例子
        var arr1 = [1,23,44,55,66,77,888,"fff"];
        var arr2 = arr1.slice(2,4) //从index为2截取到index为4之前不包括4
        console.log(arr2); //[44,55]
        console.log(arr1); // [1,23,44,55,66,77,888,"fff"]原始数组没有被改变
1
2
3
4
5
二、 splice(start,deleteCount,item1,item2…..);

start参数 开始的位置
deleteCount 要截取的个数
后面的items为要添加的元素
如果deleteCount为0，则表示不删除元素，从start位置开始添加后面的几个元素到原始的数组里面
返回值为由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组
这个方法会改变原始数组，数组的长度会发生变化
//例子
        var arr3 = [1,2,3,4,5,6,7,"f1","f2"];
        var arr4 = arr3.splice(2,3) //删除第三个元素以后的三个数组元素(包含第三个元素)
        console.log(arr4); //[3,4,5];
        console.log(arr3); //[1,2,6,7,"f1","f2"]; 原始数组被改变

        var arr5 = arr3.splice(2,0,"wu","leon"); 
        //从第2位开始删除0个元素，插入"wu","leon"
        console.log(arr5); //[] 返回空数组
        console.log(arr3); // [1, 2, "wu", "leon", 6, 7, "f1", "f2"]; 原始数组被改变

        var arr6 = arr3.splice(2,3,"xiao","long");
        //从第2位开始删除3个元素，插入"xiao","long"
        console.log(arr6); //["wu", "leon", 6]
        console.log(arr3); //[1, 2, "xiao", "long", 7, "f1", "f2"]

        var arr7 = arr3.splice(2);//从第三个元素开始删除所有的元素
        console.log(arr7);//["xiao", "long", 7, "f1", "f2"]
        console.log(arr3); //[1, 2]

````





#### js数组的方法

concat() 合并数组，并返回合并之后的数据

join()使用分隔符，将数组转为字符串并返回

pop()删除最后一位，并返回删除的数据

shift()删除第一位，并返回删除的数据

unshift()在第一位新增一或多个数据，返回长度

push()在最后一位新增一或多个数据，返回长度

reverse()反转数组，返回结果

slice()截取指定位置的数组，并返回

sort()排序（字符规则），返回结果

splice()删除指定位置，并替换，返回删除的数据



toString()直接转为字符串，并返回

valueOf()返回数组对象的原始值

indexOf()查询并返回数据的索引

lastIndexOf()反向查询并返回数据的索引

forEach()参数为回调函数，会遍历数组所有的项，回调函数接受三个参数，反别为value，index，self；forEach没有返回值

map()同forEach同时回调函数返回数据，组成新数组由map返回

filter()同forEach,同时回调函数返回布尔值，为true的数据组成新数组由filter返回

every()同forEach,同时回调函数返回布尔值，全部为true，由every返回true

some()同forEach,同时回调函数返回布尔值，只要由一个为true，由some返回true

reduce()归并，同forEach,迭代数组的所有项，并构建一个最终值，由reduce返回

```js
 list_pay.reduce((a, b) => (a = a + Number(b.amt_pay)), 0)
```



reduceRight()反向归并，同forEach,迭代数组所有项，并构建一个最终值，由reduceRight返回

原数组会发生改变

unshift()

push()

shift()

pop()

sort()

reverse()

splice()



###### **扁平化n维数组**

**1.终极篇**

```
[1,[2,3]].flat(1) //[1,2,3][1,[2,3,[4,5]].flat(1) //[1,2,3,4,5][1,[2,3,[4,5]]].toString()  //'1,2,3,4,5'[1[2,3,[4,5[...]].flat(Infinity) //[1,2,3,4...n]
```

Array.flat(n)是ES10扁平数组的api,
n表示数组嵌套的深度,如果数组嵌套两层,n取值大于或等于1都可以,n值为Infinity时维度为无限大。

**2.开始篇**

```
function flatten(arr) {    while(arr.some(item=>Array.isArray(item))) {        arr = [].concat(...arr);    }    return arr;}flatten([1,[2,3]]) //[1,2,3]flatten([1,[2,3,[4,5]]) //[1,2,3,4,5]
```

实质是利用递归和数组合并方法concat实现扁平。

###### **去重**

**1.终极篇**

```
Array.from(new Set([1,2,3,3,4,4])) //[1,2,3,4][...new Set([1,2,3,3,4,4])] //[1,2,3,4]
```

set是ES6新出来的一种一种定义不重复数组的数据类型。
Array.from是将类数组转化为数组。
...是扩展运算符,将set里面的值转化为字符串。
**2.开始篇**

```
Array.prototype.distinct = function(){ var arr = this,  result = [],  i,  j,  len = arr.length; for(i = 0; i < len; i++){  for(j = i + 1; j < len; j++){   if(arr[i] === arr[j]){    j = ++i;   }  }  result.push(arr[i]); } return result;}[1,2,3,3,4,4].distinct(); //[1,2,3,4]
```

取新数组存值,循环两个数组值相比较。

###### 排序

**1.终极篇**

```
[1,2,3,4].sort((a, b) => a - b); // [1, 2,3,4],默认是升序[1,2,3,4].sort((a, b) => b - a); // [4,3,2,1] 降序
```

sort是js内置的排序方法,参数为一个函数 2.开始篇 冒泡排序:

```
Array.prototype.bubleSort=function () {    let arr=this,        len = arr.length;    for (let outer = len; outer >= 2; outer--) {      for (let inner = 0; inner <= outer - 1; inner++) {        if (arr[inner] > arr[inner + 1]) {          //升序          [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]];          console.log([arr[inner], arr[inner + 1]]);        }      }    }    return arr;  }[1,2,3,4].bubleSort() //[1,2,3,4]
```

选择排序

```
  Array.prototype.selectSort=function () {        let arr=this,            len = arr.length;        for (let i = 0, len = arr.length; i < len; i++) {    for (let j = i, len = arr.length; j < len; j++) {      if (arr[i] > arr[j]) {        [arr[i], arr[j]] = [arr[j], arr[i]];      }    }  }    return arr;  }  [1,2,3,4].selectSort() //[1,2,3,4]
```

###### **最大值**

**1.终极篇**

```
Math.max(...[1,2,3,4]) //4Math.max.apply(this,[1,2,3,4]) //4[1,2,3,4].reduce( (prev, cur,curIndex,arr)=> { return Math.max(prev,cur);},0) //4
```

Math.max()是Math对象内置的方法,参数是字符串;
reduce是ES5的数组api,参数有函数和默认初始值;
函数有四个参数,pre(上一次的返回值),cur(当前值),curIndex(当前值索引),arr(当前数组)

2.开始篇 先排序再取值

###### **求和**

**1.终极篇**

```
eval([1,2,3,4].join('+')] //10[1,2,3,4].arr.reduce((prev, cur) =>prev + cur) //10
```

**2.开始篇**

```
function sum(arr) {  var len = arr.length;  if(len == 0){    return 0;  } else if (len == 1){    return arr[0];  } else {    return arr[0] + sum(arr.slice(1));  }}sum([1,2,3,4]) //10
```

利用slice截取改变数组,再利用递归求和。

###### **合并**

**1.终极篇**

```
[1,2,3,4].concat([5,6]) //[1,2,3,4,5,6][...[1,2,3,4],...[4,5]] //[1,2,3,4,5,6][1,2,3,4].push.apply([1,2,3,4],[5,6]) //[1,2,3,4,5,6]
```

**2.开始篇**

```
let arr=[1,2,3,4];[5,6].map(item=>{   arr.push(item)}) //arr值为[1,2,3,4,5,6],注意不能直接return出来,return后只会返回[5,6]
```

###### **判断是否包含值**

**1.终极篇**

```
[1,2,3].includes(4) //false[1,2,3].indexOf(4) //-1 如果存在换回索引[1, 2, 3].find((item)=>item===3)) //3 如果数组中无值返回undefined[1, 2, 3].findIndex((item)=>item===3)) //2 如果数组中无值返回-1
```

includes(),find(),findIndex()是ES6的api

**2.开始篇**

```
[1,2,3].some(item=>{  return item===3}) //true 如果不包含返回false
```

###### **类数组转化**

**1.终极篇**

```
Array.prototype.slice.call(arguments) //arguments是类数组(伪数组)Array.prototype.slice.apply(arguments)Array.from(arguments)[...arguments]
```

类数组:表示有length属性,但是不具备数组的方法
call,apply:是改变slice里面的this指向arguments,所以arguments也可调用数组的方法
Array.from是将类似数组或可迭代对象创建为数组
...是将类数组扩展为字符串,再定义为数组

**2.开始篇**

```
Array.prototype.slice = function(start,end){      var result = new Array();      start = start || 0;      end = end || this.length; //this指向调用的对象，当用了call后，能够改变this的指向，也就是指向传进来的对象，这是关键      for(var i = start; i < end; i++){           result.push(this[i]);      }      return result; } 
```

###### **每一项设置值**

**1.终极篇**

```
[1,2,3].fill(false) //[false,false,false]注:fill填充对象会报错
```

fill是ES6的方法 2.开始篇

```
[1,2,3].map(() => 0)
```

###### **每一项是否满足**

```
[1,2,3].every(item=>{return item>2}) //false
```

every是ES5的api,每一项满足返回 true

###### **有一项满足**

```
[1,2,3].some(item=>{return item>2}) //true
```

some是ES5的api,有一项满足返回 true

###### **过滤数组**

```
[1,2,3].filter(item=>{return item>2}) //[3]
```

filter是ES5的api,返回满足添加的项的数组

###### **对象和数组转化**

```
Object.keys({name:'张三',age:14}) //['name','age']Object.values({name:'张三',age:14}) //['张三',14]Object.entries({name:'张三',age:14}) //[[name,'张三'],[age,14]]Object.fromEntries([name,'张三'],[age,14]) //ES10的api,Chrome不支持 , firebox输出{name:'张三',age:14}
```

### string

charAt()返回指定位置的字符串

charCodeAt()返回在指定的位置的字符的Unicode编码。

concat()连接字符串

indexOf()检索字符串

match()找到一个或多个正则表达式的匹配

replace()替换与正则表达式匹配的子串

search()检索与正则表达式相匹配的值

slice()提取字符串的片段，并在新的字符串中返回被提取的部分

split()把字符串分割为字串数组。

toLocaleLowerCase()把字符串转换为小写

toLocaleUpperCase()把字符串转换为大写

toLowerCase()把字符串转换为小写

toUpperCase()把字符串转换为大写

substr()从起始索引号提取字符串中指定数目的字符

substring提取字符串中两个指定的索引号之间的字符

### Math

ceil(x)尽可能取最大

floor(x)尽可能取最小

round(x)把数四舍五入为最接近的整数

max(x,y)返回x和y中的最高值

min(x,y)返回x，y中的最低值

pow(x,y)返回x，y次幂

random()返回0~1之间的随机数

sqrt(x)返回数的平方根

‘parseInt()取整

toFixed() 取两位小数



### Object

````js
class Person{
    constructor(name){
        this.name = name;
    }
    showName(){
        return this.name;
    }
}
class SubPerson extends Person{
    constructor(name,job){
        super(name);
        this.job = job;
    }
    showJob(){
        return this.job;
    }
}

let p1 = new SubPerson('千点张三','前端开发');
console.log(p1.name);//千点张三
//console.log(p1.showName()) 千点张三
//console.log(p1.job) //前端开发
````

### 判断

###### 是否为整数

````js
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
Number.isInteger("15") // false
Number.isInteger(true) // false
````





###  promise

#### 谈谈promise

````js
const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})
promise.then(() => {
  console.log(3)
})
console.log(4)

//运行结果：1 2 4 3 
//解释：Promise 构造函数是同步执行的，promise.then 中的函数是异步执行的。

````
#### 所有的 ES6 特性你都知道吗？如果遇到一个东西不知道是 ES6 还是 ES5, 你该怎么区分它？

````js


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
 
console.log('promise1', promise1)
console.log('promise2', promise2)
 
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
//运行结果
promise2 Promise { <pending> }
(node:50928) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: error!!!
(node:50928) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
promise1 Promise { 'success' }
promise2 Promise {
  <rejected> Error: error!!!
    at promise.then (...)
    at <anonymous> }
//解释
 promise 有 3 种状态：pending、fulfilled 或 rejected。状态改变只能是 pending->fulfilled 或者 pending->rejected，状态一旦改变则不能再变。上面 promise2 并不是 promise1，而是返回的一个新的 Promise 实例。
````

#### es6的继承和es5的继承有什么区别

````
ES5的继承是通过prototype或构造函数机制来实现。

ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上(Parent.apply(this))。

ES6的继承机制实质上是先创建父类的实例对象this(所以必须先调用父类的super()方法)，然后再用子类的构造函数修改this。具体为ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承。子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其调用。如果不调用super方法，子类得不到this对象。

注意：super关键字指代父类的实例，即父类的this对象。在子类构造函数中，调用super后，才可使用this关键字，否则报错

````

#### 利用promise封装ajax

````
function xxx(){
    return new Promise((f1, f2) => {
        doSomething()
        setTimeout(()=>{
            // 成功就调用 f1，失败就调用 f2
        },3000)
    })
}

xxx().then(success, fail)

// 链式操作
xxx().then(success, fail).then(success, fail)
````

## Promise

> Promise 就是一个对象，用来传递异步操作的消息。有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来。

### 1. Promise特点

- 承诺将来会执行

- 防止回调地狱 - Callback Hell

- 可以进行then的链式执行

- 区分数据请求和数据处理

- 三种状态

  - pending：等待中，或者进行中，表示还没有得到结果
  - resolved（fullfilled）：已经完成，表示得到了我们想要的结果，可以继续往下执行
  - rejected：也表示得到结果，但是由于结果并非我们所愿，因此拒绝执行

- 调用时会被传递两个参数：`resolve`和`reject`函数

- 具备

  ```
  then()
  ```

  方法，对于

  ```
  then()
  ```

  方法有以下简单的要求：

  1. 接收完成态、错误态的回调方法
  2. 可选地支持progress事件回调作为第三个方法
  3. 只接受function对象
  4. 返回Promise对象，以实现链式调用

### 2. 如何创建AJAX

一个Ajax建立要了解以下几点：

- XMLHttpRequest对象的工作流程
- 兼容性处理
- 事件的触发条件
- 事件的触发顺序

步骤：

1. 创建`XMLHttpRequest`对象，也就是创建一个**异步调用对象**。
2. 创建一个新的HTTP请求，并指定该HTTP请求的方法、URL及验证信息。
3. 设置响应HTTP请求状态变化的函数。
4. 发送HTTP请求。
5. 获取异步调用返回的数据。
6. 使用JavaScript和DOM实现局部刷新。

### 3. 利用Promise知识，用原生JS封装AJAX



```javascript
var url = '/请求的路径';
var params = {
    id: 'id=123',
    limit: 'limit=10'
};

// 封装一个get请求的方法
function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var XHR = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP');

        XHR.onreadystatechange = function () {
            //readyState属性表示请求/响应过程的当前活动阶段。
            if (XHR.readyState == 4) {
                if ((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304) {
                    try {
                        //获取数据
                        var response = JSON.parse(XHR.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error("Request was unsuccessful: " + XHR.statusText));
                }
            }
        }
        XHR.open('GET', url + '?' + params.join('&'), true);
        XHR.send(null);
    })
}

getJSON(url).then(resp => console.log(resp));
```

**readyState**
 0 - 代表未初始化。 还没有调用 open 方法
 1 - 代表正在加载。 open 方法已被调用，但 send 方法还没有被调用
 2 - 代表已加载完毕。send 已被调用。请求已经开始
 3 - 代表正在与服务器交互中。服务器正在解析响应内容
 4 - 代表完成。响应发送完毕

> readyState的值等于3，就是“流”(streaming)，它是提升数据性能的强大工具。

### 4. Promise 语法

代码以实现异步操作img为例

#### 4.1 ES5 异步Callback实现



```javascript
function loadImg(src, callback, fail) {
    var img = document.createElement('img')
    img.onload = function () {
        callback(img)
    }
    img.onerror = function () {
        fail()
    }
    img.src = src
}
var src = 'https://img.mukewang.com/5be2bcb30001a46709360316.jpg'
loadImg(src, function (img) {
    console.log(img.width)
}, function () {
    console.log('failed')
})
```

#### 4.2 Promise实现



```javascript
function loadImg(src) {
    const promise = new Promise(function (resolve, resolve) {
        var img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject()
        }
        img.src = src
    })
    return promise
}


var src = 'https://img.mukewang.com/5be2bcb30001a46709360316.jpg'
var result = loadImg(src)

result.then(function (img) {
    console.log(img.width)
}, function () {
    console.log('failed')
})
result.then(function (img) {
    console.log(img.height)
})
```

优点：便于集成、扩展
 注意：

- new Promise 实例，必须要 return
- new Promise 时要传入函数，函数有 resolve reject 两个参数
- 成功时执行 resolve() 失败时执行 reject()

#### 4.3 重要语法

- Promise.all接收一个Promise对象组成的数组作为参数，当这个数组所有的Promise对象状态都变成resolved或者rejected的时候，它才会去调用then方法。

- Promise.race与Promise.all相似的是，Promise.race都是以一个Promise对象组成的数组作为参数，不同的是，只要当数组中的其中一个Promsie状态变成resolved或者rejected时，就可以调用.then方法了。

- 如何有效的将ajax的数据请求和数据处理分别放在不同的模块中进行管理

  - 将所有的数据请求这个动作放在同一个模块中统一管理

  

  ```javascript
  define(function(require) {
      var API = require('API');
  
      // 因为jQuery中的get方法也是通过Promise进行了封装，最终返回的是一个Promise对象，因此这样我们就可以将数据请求与数据处理放在不同的模块，即使用一个统一的模块来管理所有的数据请求
  
      // 获取当天的信息
      getDayInfo = function() {
          return $.get(API.dayInfo);
      }
  
      // 获取type信息
      getTypeInfo = function() {
          return $.get(API.typeInfo);
      };
  
      return {
          getDayInfo: getDayInfo,
          getTypeInfo: getTypeInfo
      }
  });
  ```

  可以增加过滤处理

  - 拿到数据并处理数据

  

  ```javascript
  // components/calendar.js
  define(function(require) {
      var request = require('request');
  
      // 拿到数据之后，需要处理的组件，可以根据数据渲染出需求想要的样式
  
      request.getTypeInfo()
          .then(function(resp) {
  
              // 拿到数据，并执行处理操作
              console.log(resp);
          })
  
      // 这样，我们就把请求数据，与处理数据分离开来，维护起来就更加方便了，代码结构也足够清晰
  })
  ```

# promise封装ajax

```
const axios = function(options){
    let promise = new promise(( resolve , reject )=>{
        var xhr = null;
        if(window.XMLHttpRequest){//兼容处理
           xhr = new XMLHttpRequest();
       }else{
           xhr = new ActiveXObject("Microsoft.XMLHTTP");   
       }
         var data = "";
        for (var key in options.data) {//数据处理
            data += "&" + key + "=" + options.data[key]
        }
       if (options.method == "get") {

            let url = options.url + "?" + data.slice(1);
            xhr.open(options.method, url);
            xhr.send();
        } else if (options.method == "post") {

            xhr.open(options.method, options.url);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send(data);
        }

    
        xhr.onreadystatechange = function () {
            let timer = null;
            let timeout = options.timeout?options.timeout:5000  //等待响应的时间 
            if(xhr.readyState == 4 && xhr.status == 200){
                let res = JSON.parse(xhr.responseText);
                clearTimeout(timer);
                resolve(res);
            }
             

            timer = setTimeout(()=>{
                clearTimeout(timer);
                reject(xhr.status);
            },timeout) 
            
        }
    })
    return promise;
}    
```



栗子：



```
 axios({
        method:"get",
        url:"./data.json",
        data:{
            id:10
        }
    }).then((res)=>{
        console.log(res)
    },(e)=>{
        console.log(e);
    })
```

#### let const 区别

````
const的特点：

不能变量提升（必须先声明后使用）
不能跨区域
不能重复声明和赋值，否则会报错
声名的变量不挂载到window对象上
let的特点：

不能变量提升（必须先声明后使用）
不能跨区域
不能重复声明
声名的变量不挂载到window对象上
````

#### es6 generator

````js
学习 Generator 语法，你需要了解function* 、yield、next三个基本概念。

· function* 用来声明一个函数是生成器函数，它比普通的函数声明多了一个*,*的位置比较随意可以挨着 function 关键字，也可以挨着函数名

· yield 产出的意思，这个关键字只能出现在生成器函数体内，但是生成器中也可以没有yield 关键字，函数遇到 yield 的时候会暂停，并把 yield 后面的表达式结果抛出去

· next作用是将代码的控制权交还给生成器函数

// 声明生成器函数
function* generator() {
   // A
   yield 'foo'
    // B
}
// 获取生成器对象
let g = generator();
// 第一个 next()，首次启动生成器
g.next(); // {value: "foo", done: false}
// 唤醒被 yield 暂停的状态
g.next();
// {value: undefined, done: true}

````





###### 异步加载js文件

````js
  function loadScript(url, callback) {
            let script = document.createElement('script');
            script.type = "text/javascript";
            if (script.readyState) {
                script.onreadystatechange = function () {
                    //ie
                    if (script.readyState == "complete" || script.resadState == "loaded") {
                        callback();
                    }
                }
            } else {
                script.onload = function () {
                    // safari chrome forefox opera
                    callback();
                }
            }
            script.src = url;
            document.head.appendChild(script);
        }
        loadScript('./index.js');
````

#### 正则表达式

````js
//身份证号：/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
正则在写代码过程中是必不可少的一环，这里汇总一下，便于后期开发使用。

1、手机号校验

复制代码
var phoneReg = /^1[3456789]\d{9}$/; // 通用校验规则
console.log(reg.test(13679563335))

var phoneReg1 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/; // 详细手机号校验规则
console.log(reg.test(13679563335))

var reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;;  //验证手机号和固定电话
复制代码
2、邮箱格式校验

var emailReg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
console.log(1017737292@qq.com)
3、用户名校验

var userNameReg = /^[a-zA-Z0-9_-]{6,16}$/;  //6-16位的包含大小写字母、数字、特殊符号- _ 的用户名
var userNameReg1 = /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/; //6-20位字母和数字组合
4、密码强度校验

var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/; //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var passwordReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/; // 请输入6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种
//输出 true
console.log(reg.test("123qweA#"));
5、整数校验

复制代码
//正整数正则
const posReg = /^\d+$/;
//负整数正则
const negReg = /^-\d+$/;
//整数正则
const numReg = /^-?\d+$/;
const re = /^[0-9]*[1-9][0-9]*$/; // 正整数正则
console.log(posReg.test("15"));  //输出 true

console.log(negReg.test("-15"));  //输出 true

console.log(numReg.test("-25")); //输出 true
复制代码
6、身份证验证

 var idcardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

console.log(37281019653429120)
7、合法url校验

const urlReg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
8、验证输入内容是否包含英文数字及下划线

var reg = /^[_a-zA-Z0-9]+$/;
console.log(reg.test('2334sdfsfk3'));
9、验证1-99之间的数字

 var reg = /^[1-9][0-9]{0,1}$/;
console.log(33);
10、验证是否两位小数

var twoDigReg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
console.log(twoDigReg.test(123.24));
11、中文校验

var chineseReg = /^[\u0391-\uFFE5A-Za-z]+$/;
console.log(chineseReg.test('中国2'))；
12、纯数字校验

var numberReg = /^\d+$|^\d+[.]?\d+$/;
console.log(numberReg.test(2344.2))
13、最多一位小数

var reg = /^[0-9]+([.]{1}[0-9]{1})?$/;
console.log(reg.test(23.23));
14、ip地址校验

//ipv4地址正则
var reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
console.log(reg.test("115.28.47.26")); //输出 true
15、包含中文的校验

var reg = /[\u4e00-\u9fa5]/gm
console.log(reg.test('小夭同学')
16、只能输入n个字符

var reg = /^\d{n}$/
console.log(reg.test(434))
17、至少输入n个字符

var reg = /^\d{n,}$/;
console.log(reg.test(11212));
18、输入m-n个字符

var reg = /^\d{m,n}$/
console.log(reg.test(1212))
19、内容只能由英文、数字、下划线组成

var reg = /^\w+$/;
console.log(reg.test(drt23_));
20、内容只能包含英文字母和数字

var reg = /^[a-z0-9]+$/i；
console.log(reg.test(455fdg))；
````

原生js验证

````
var foo = 'bar';
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	form{
		width: 600px;
		margin: 100px auto;
		border:1px solid black;
		height: 600px;
		text-align:left;
		padding-top: 50px;
		position: relative;
		background: #88bbff;
	}
		b{
			display: inline-block;
			width: 150px;
			text-align: right;
			margin-right: 20px;
		}
		input{
			width: 300px;
			height: 30px;
		}

		p{
			margin-bottom: 20px;
			font-size: 10px;
			color: #ccc;
			height: 10px;
			margin-left: 170px;
		}
		input:nth-of-type(5){
			width: 70px;
			height: 30px;
			margin-left: 170px;
		}
		span{
			color: red;
			font-size: 12px;
		}
		h1{
			width: 100%;
			text-align: center;
			margin-bottom: 50px;
		}
	</style>
</head>
<body>
	<form action="#">
	<h1>注册</h1>
		<b>邮箱地址</b><input type="text" id="email"><span id="tip1"></span><br>
		<p>6~18个字符，可使用字母、数字、下划线，需以字母开头</p>
		 <b>密码</b><input type="password" id="pwd"><span id="tip2"></span><br>
		 <p>6~16个字符，区分大小写</p>
		<b>确认密码</b><input type="password" id="repwd"><span id="tip3"></span><br>
		<p>请再次填写密码</p>
		<b>手机号码</b><input type="tel" id="phone"><span id="tip4"></span><br>
		<p> </p>
		<input type="submit" id="sub" value="注册">
	</form>
</body>
<script>
var email = document.querySelector('#email');
var pwd = document.querySelector("#pwd");
var repwd = document.querySelector("#repwd");
var phone = document.querySelector("#phone");
var oBtn = document.querySelector("#sub");
	//验证邮箱
	email.onblur = function(){
	if(email.value ==""){
		document.querySelector("#tip1").innerText = "邮箱不能为空！";
		return false;
	}else if(!/^[a-z]/i.test(email.value)){
		document.querySelector("#tip1").innerText = "请以字母开头！";
		return false;
	}else if(!/^[a-z]\w{5,17}@(163|qq)\.com$/i.test(email.value)){
		document.querySelector("#tip1").innerText = "请输入6~18个字符！";
		return false;
	}else {
		document.querySelector("#tip1").innerText = "";
		return true;
		}
	}
	//验证密码
	pwd.onblur = function(){
		if(pwd.value ==""){
			document.querySelector("#tip2").innerText = "密码不能为空！";
			return false;
		}else if(!/\w{6,16}/.test(pwd.value)){
		document.querySelector("#tip2").innerText = "请输入6~16个字符！";
			return false;
		}else{
			document.querySelector("#tip2").innerText = "";
			return true;
		}
	}
	//再次输入密码
	repwd.onblur = function(){
	if(pwd.value != repwd.value){
			document.querySelector("#tip3").innerText = "两次输入密码不一致！";
			return false;
	}else{
		document.querySelector("#tip3").innerText = "";
		return true;
		}
	}
	//验证手机号码
	phone.onblur = function(){
		if(phone.value==""){
			document.querySelector("#tip4").innerText = "手机号不能为空！";
			return false;
		}else if(!/^1[35789]\d{9}$/.test(phone.value)){
			document.querySelector("#tip4").innerText = "手机号输入有误！";
			return false;
		}else{
			document.querySelector("#tip4").innerText = "";
			return true;
		}
	}
	oBtn.onclick = function(){
		if(email.value ==""){
		document.querySelector("#tip1").innerText = "邮箱不能为空！";
			return false;
		}else if(pwd.value ==""){
			document.querySelector("#tip2").innerText = "密码不能为空！";
			return false;
		}else if(repwd.value ==""){
			document.querySelector("#tip3").innerText = "密码不能为空！";
			return false;
		}else if(phone.value ==""){
			document.querySelector("#tip4").innerText = "手机号不能为空！";
			return false;
		}else{
		document.querySelector("#tip1").innerText = "";
		document.querySelector("#tip2").innerText = "";
		document.querySelector("#tip3").innerText = "";
		document.querySelector("#tip4").innerText = "";
		return true;
		}
	}
</script>
</html>

````





````js
//随机获取布尔值：
const randomBoolean = () =>Math.random()<=0.5
//判断给的日期是否为工作日
const isWeekday = (date) => date.getDay()%6 !==0;
console.log(isWeekday(2021,0,10))
//反转字符串
const reverse = str =>str.split('').reverse().join('');
//判断当前选项卡是否在焦点中
const isBrowserTabView = () => document.hidden;
isBrowserTabView()
//判断是基数还是偶数
const isEven = num => num%2 ===0;
//从日期获取时间
const timeFromDate = date.toTimeString().slice(0,8)
console.log(timeFromDate(new Date(2021,0,10,17,30,0)))
//将数字四舍五入到固定的小数点
const toFixed = (n,fixed) => ~~ (Math.pow(10,,fixed) * n) / Math.pow(10,fixed);
toFixed(25.3333333,1)

//检查元素当前是否处于焦点
const elementInfocus = (el) => (el === document.activeElement);
elementIsInFocus(anyElement)
//检测当前用户是否支持触摸事件
const touchSupported =() =>{
    ('ontouchstart' in window || window.DocumentTouch && documnet instanceof window.DocumentTouch)
}
touchSupported()

//检测当前用户是否在Apple 设备上
const isAppleDevice = /mac|iPod|iPhone|ipad/.test(navigator.platform);
//滚动到页面顶部
const goToTop = () => window.scrollTo(0,0);
goToTop();

//获取参数的平均值
const average = (...args) => args.reduce((a,b)=>a+b)/args.length
average(1,2,3,4)
//转化华氏/摄氏

````

````


````

###### 处理两个时间差

````js
<wxs module="m">
var my_filter = function(startTime,endTime) {
     startTime = startTime.split(' ')[1] 
      endTime = endTime.split(' ')[1]
     console.log(countDown(startTime),countDown(endTime));
    return countDown(endTime) - countDown(startTime)
}

function countDown(time){
var s = 0;
var hour = time.split(':')[0];
var min = time.split(':')[1];
var sec = time.split(':')[2];
s = Number(hour * 3600) + Number(min * 60) + Number(sec);
console.log(s);
return s;
}
function formatDuring(mss){
var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
var seconds = (mss % (1000 * 60)) / 1000;
hours = hours < 10 ? ('0' + hours) : hours;
minutes = minutes < 10 ? ('0' + minutes) : minutes;
seconds = seconds < 10 ? ('0' + seconds) : seconds;
return hours + ":" + minutes + ":" + seconds;
}
  module.exports.my_filter = my_filter
````

###### 判断手机类型

`````js
//判断是否为手机游览器

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobi|Windows CE|Symbian|Windows Phone|POLARIS|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/i
    .test(navigator.userAgent)) {
    //移动端浏览器  
    AndroidIp('http://58.87.108.109:8084')
} else {
    //PC浏览器  
    let bb = "2222"
    alert(bb)
    console.log(22222)
`````


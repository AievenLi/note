###### Map

Map是一种数据结构，由键值对组成。Map看起来像一个二维数组，存放着一对对键值对，可通过键名获取对应的键值。将一个对象数组（例如学生成绩对象）转化为Map，可以通过“学生姓名”获取“学生成绩”，Map查询速度更快。

var scoreList = [
  { name: 'Tim', age: 18, score: 90 },
  { name: 'Tony', age: 17, score: 95 },
  { name: 'Kevin', age: 18, score: 91 }
];
var tempArray = [];
scoreList.forEach((item) => {
  tempArray.push([item.name, item.score]); // 转化成Map结构，通过键名查找score
})
var scoreMap = new Map(tempArray);

console.log(scoreMap); // Map结构
console.log(Array.from(scoreMap)); // 转化为数组的形式
console.log(`Kevin 's score: `, scoreMap.get('Kevin')); // get()获取‘Kevin’对应的键值
console.log(scoreMap.has('Tim')); // has()判断是否含有键名‘Tim’


for of遍历可迭代对象——Map。区别for in与for of，for in遍历可迭代对象的key，或数组的下标；for of遍历可迭代对象的值

Map结构是一个二维数组，通过ES6数组解构获取元素值

for (let [key, value] of scoreMap) {
  console.log(`${key} 's score: `,value);
}


Map看起来跟Object对象相似，但还是有以下区别

Object对象的键名只能是“数值”或“字符串”类型，而Map的键名可以是任意类型“数值”、“字符串”、“undefined”、“null”、“对象”
接收后端返回的数据时，Map元素顺序与插入顺序相同，Object则按照键名的字典序排序

###### Set

Set是一种数据结构，特点是不能存放相同的元素，可用于数组去重

var setArray = new Set([1, 1, 2, 2, 3]);

for (let value of setArray) {
  console.log(value);
}

console.log(setArray);
console.log([...setArray]); // 转化为数组，或使用Array.from(setArray)


数组去重（同一基本类型）

1. 使用Set和Array.from

const unique = (arr) => Array.from(new Set(arr));
const arr = ['apple', 'banana', 'apple', 'pear', 'strawberry'];
console.log(unique(arr));

2. 使用Array.filter和Array.indexOf

const unique = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
const arr = ['apple', 'banana', 'apple', 'pear', 'strawberry'];
console.log(unique(arr));

3. 使用Array.reduce和Array.includes

const unique = (arr) => {
  return arr.reduce((cur, next) => {
    return cur.includes(next) ? cur : [...cur, next];
  }, []); // cur的初始值为[]
}
const arr = ['apple', 'banana', 'apple', 'pear', 'strawberry'];
console.log(unique(arr));

4. 利用对象的键不可重复，去重数组对象

const unique = (arr, key) => {
  let result = {};
  for (let item of arr) {
    result[item[key]] = item;
  }
  console.log(result);
  return Object.values(result); // 再转化为数组
}
const arr = [
  { id: 1, name: 'Jeremy Lin' },
  { id: 2, name: 'Eason Chan' },
  { id: 2, name: 'Eason Chan' },
  { id: 3, name: 'Jay Chou' }
];
console.log(unique(arr, 'id'));

5. 数组添加不可重复的项

const historyList = [
  { id: 1, keyword: '西域男孩' },
  { id: 2, keyword: 'Better Man' },
  { id: 3, keyword: '张国荣' },
  { id: 4, keyword: 'Linkin Park' }
];
const searchItem = { id: 2, keyword: 'Better Man' };
const newHistoryList = historyList.filter(({ id }) => id !== searchItem.id);

newHistoryList.unshift(searchItem)
console.log(newHistoryList)


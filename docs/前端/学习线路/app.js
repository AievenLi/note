/* console.log('js')
let  myhtml= document.getElementsByTagName('div')[0];
let  myul =  document.createElement('li');


myhtml.onclick =function(){
    obj={
        name:'张三',
        age:12
    }
   // let test = `<li>从前有个${obj.name}开发了${obj.age}岁的孩子<li> `

    let test = `12333`
    let test2 = `115546`
    let p = `1234566`
    myhtml.appendChild(myul);
        myhtml.innerHTML= test
} */
let Person = function(test,name,age,){
    this.test = test
    this.name=name;
    this.age = age;
}
Person.prototype.inner = function(){
    console.log(this.test)
}
const Person1 = new Person('<p>这是我的成功</p>');
Person1.inner();
class Parent {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log(this.name)
    }
}
const Parent1 = new Parent('张三');
Parent1.sayName();



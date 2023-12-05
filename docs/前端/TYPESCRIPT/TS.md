接口
````
// 生物体的接口
interface Creature  {
  name: string;
}

// 动物接口  继承生物接口
interface Animal extends Creature {
  // 自己拥有的属性 action
  action(): void;
}

class Dog implements Animal {
  name: string; // name是 Animal继承自 Creature的，不实现会报错
  action(): void {
    console.log(`我是${this.name}`)
  }

  constructor (name: string) {
    this.name = name;
  }
}

new Dog("狗狗").action()  // 我是狗狗

//继承多个

// 生物体的接口
interface Creature {
  name: string;
}

// 动物接口  
interface Animal {
  // 自己拥有的属性 action
  action(): void;
}

// 狗Dog接口继承 生物Creature 和 Animal 多继承
interface Dog extends Creature, Animal{
  color: string;
}


class Golden implements Dog {
  name: string;
  color: string;
  action():void {
    console.log(`我是${this.name},我的颜色是${this.color}`)
  }

  constructor(name: string, color:string) {
    this.name = name;
    this.color = color;
  }
}

new Golden("金毛","金黄色").action() // 我是金毛,我的颜色是金黄色

````


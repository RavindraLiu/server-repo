// 抽象类和抽象方法, 父类不进行实现,在子类中进行实现
abstract class Animal {
  name: string;
  abstract speak(): void;
}

class Cat extends Animal {
  // 子类继承父类，实现父类的抽象方法
  speak(): void {
    console.log("喵喵喵");
  }
}

class Dog extends Animal {
  // 子类继承父类，实现父类的抽象方法
  speak(): void {
    console.log("汪汪汪");
  }
}

// 重写: 子类重写继承自父类的方法
// 重载：函数的重载

const cat = new Cat();
function double(val: string): void;
function double(val: number): void;
function double(val: any) {
  if (typeof val === "number") {
    console.log(val.toString());
  } else if (typeof val === "string") {
    console.log(val.toString());
  }
}
double(1);
double("cc");

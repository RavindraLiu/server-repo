// 接口描述对象的形状

interface Speakable {
  name: string;
  speak(): void;
}

let speakable: Speakable = {
  name: "张三",
  speak() {},
  sing() {},
};

// 同名的接口可以定义多个, 会进行接口合并
interface Speakable {
  sing(): void;
}

interface Eatable {
  eat(): void;
}
// 类中集成接口所有的方法和属性都要被实现
class Person implements Speakable, Eatable {
  eat(): void {}
  sing(): void {}
  speak(): void {}
  name: "killian";
}

// 任意属性
interface Person1 {
  name: string;
  readonly id: string;
  [props: string]: any;
}

let person1: Person1 = {
  name: "killian",
  id: "111",
  age: 30,
};
// 接口的继承
interface Speakable1 {
  speak(): void;
}
//  接口继承， 接口合并  类继承接口
interface SpeakChinese extends Speakable1 {
  speakChinese(): void;
}

class Chinese implements SpeakChinese {
  speakChinese(): void {
    throw new Error("Method not implemented.");
  }
  speak(): void {}
}

// 接口只读属性

interface IPerson {
  readonly id: string;
}

let person2: IPerson = {
  id: "3333",
};

// 函数修饰接口 和 函数类型的定义 接口定义函数
interface IDiscount {
  (price: number): number; // 函数接口
}
const discount: IDiscount = (price: number) => price * 0.2;

// 可索引接口
interface IUser {
  [index: number]: string;
}

let user: IUser = {
  0: "0",
  1: "1",
};

let userArr: IUser[] = ["1", "2", "3"];

// 接口中描述构造函数
// 加上new之后就是修饰构造函数类型
/**
 * 当声明类的时候 会得到两种类型
 *  1. 构造函数类型
 *  2. 构造函数的实例类型
 *
 */
// 此接口描述描述的是类的构造函数
interface IWithNameClass {
  new (name: string): Animal1;
}

class Animal1 {
  constructor(public name: string) {}
}

namespace ac {
  class Component {
    static myName: string = "静态属性名称";
    myName: string = "实例属性名称";
  }
  // 类本身代表的是实例类型
  let c: Component = new Component();
  //   放在等号左边的是类型，放在右边的是值  类的类型和类的实例类型
  let f: typeof Component = Component;
  console.log(typeof Component);
}

namespace bc {
  function Component() {
    this.myName = "实例属性名称";
  }
  Component.myName = "静态属性名称";
}
// 约束的是一个函数类型
interface IType1 {
  (name: string): any;
  a1: number;
}
// 约束的是一个对象类型

interface IType2 {
  a: (name: string) => string;
}
let t1: any = (name: string) => "";
t1.a1 = 2;
let it1: IType2 = t1;

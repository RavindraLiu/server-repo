// 泛型： 宽泛的类型

// 创建一个长度为length的数组， 里面的值通过value来填充
export {};
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
// 定义的时间不确定，调用的时候确定
let result = createArray<string>(6, "x");
console.log(result);

// 泛型是一个宽泛的类型

function sum() {
  let args: IArguments = arguments;
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

function* gen() {
  yield 1;
  yield 2;
}
let it = gen();
let { value, done } = it.next();
console.log(value, done);

// 泛型类
class MyArray<T> {
  private list: T[] = [];
  add(value: T) {
    this.list.push(value);
  }
  getMax(): T {
    return this.list[0];
  }
}

let array = new MyArray<number>();
array.add(1);
array.add(2);
array.add(3);

// 泛型与new  type是一个类 构造通过new 返回一个T的类型 {new (): T} 说明具有构造函数
function factory<T>(type: { new (): T }): T {
  return new type();
}
class Person {}
factory<Person>(Person);

// 泛型接口
// 定义约束的类型，在使用使用的时候就确定
// 定义的是泛型接口
interface Calculate1<T> {
  (a: T, b: T): T; //定义类型的时候确定
}
// 在函数实际调用的时候确定泛型类型
// 定义的是泛型接口方法
interface Calculate {
  <T>(a: T, b: T): T; // 调用函数的时候确定
}
// 泛型接口中的类型上的泛型变量在定义的时候确定，泛型方法上的类型实在调用的时候确定
interface Calculate3<T> {
  <U>(a: T, b: T): U;
}

let sum1: Calculate1<number> = function (a: number, b: number): number {
  return a + b;
};

sum1(1, 2);

// 默认泛型

function createArray1<T = number>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

// 泛型约束
interface IWithLength {
  length: number;
}
// 约束泛型在类型上 使用extends进行约束  泛型约束，缩小类型
function logger<T extends IWithLength>(value: T) {
  console.log(value.length);
}
logger<string>("c");

// ts中判断的兼容不兼容，判断的是形状 鸭子类型, 判断类型是智能多不能少
class GrandFather {
  name: string;
}
class Father extends GrandFather {
  age: number;
}
class Child extends Father {
  cc: string;
}
// 类型属性只能多不能少, 扩展兼容
let t: Father = new Child();

// interface Calculate {
//   <T extends string>(a: T, b: T): T; // 调用函数的时候确定
// }
// // 泛型约束类型
// let sum2: Calculate = function <T extends string>(a: T, b: T): any {
//   return a + b;
// };

// sum2<number>(1, 2);

// string 是string|number的子类型  返回越来越大

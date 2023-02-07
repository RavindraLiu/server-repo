// 类型别名
// 声明一定一个类型
type Cart<T> = { list: T[] } | T[];

let list: Cart<string> = { list: ["1"] };
let list2: Cart<string> = ["1"];

// 接口和interface和type的区别, 能用接口类型的就用接口类型进行定义

//类型兼容

let num1: number | string;
let str: string = "killian";

// num1 = str; // 把小类型付给返回大的类型
// 不能将大范围付给小范围
// str = num1;

// 类的兼容性
namespace cc1 {
  class Father {
    name: string;
  }
  class Child extends Father {
    age: number;
  }
  let a: Father = new Child(); // 满足属性
}

// 函数的兼容性: 函数的参数 函数的返回值， 可以少不能多，多了接受不安全

type Func = (a: string, b: string) => void;
let sum: Func;

function f1(a: string, b: string) {}
sum = f1;
function f2(a: string) {}
sum = f2;
function f3() {}
sum = f3;
//
function f4(a: string, b: string, c: string) {}
// 比较返回值
type GetPerson = () => { name: string; age: number };
function f5() {
  return {
    name: "killian",
    age: 20,
    gender: 0,
  };
}

let fn100: GetPerson = f5; // 约束类型安排
// 函数参数和返回值都是考虑到类型安全

// 函数的逆变和协变： 返回值是协变的 参数是逆变的
// 返回值可以传子类，返回值可以传父类

function exec() {}

let c: unknown;

let aaa = {
  a: 100,
};

c = aaa;

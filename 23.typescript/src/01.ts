let isMarried: boolean = false;

let age: number = 10;

let first_name = "xiaoming";

let arr1: string[] = ["1", "2"];

// 元祖类型 数量和已知的类型

let zhufeng: [string, number] = ["zhufeng", 10];

// 泛型和类型推导 类型生命

enum Gender {
  girl,
  body,
}
const enum COLOR {
  RED,
  YELLOW,
  BLUE,
}

// 任意类型
// let root: HTMLElement | null = document.getElementById("root");
// 类型非空断言
// root!.style.color = "gender";

// null undefined   其他类型的子类型
// strictNullChecks: true 不能把undefined/null赋值给其他类型
// arr1 = null;
// age = undefined;

// never 代表不会出现的值
// 1 作为不会反悔函数的值
function error(message: string): never {
  throw new Error("报错了");
}

let a: null;
// void代表了没有返回值
// 函数没有返回值就返回void  函数返回值是void undefined可以赋值给void null不可以复制给void
function greeting(): void {
  return;
}
// never 和void的区别

// void可以赋值给undefined null never不可以赋值

// Symbol
let s1 = Symbol("key");
let s2 = Symbol("key");

// bigInt
const max = Number.MAX_SAFE_INTEGER;

// console.log(max + 1n === max + 2n);

//类型推导
let uname = "";
// uname = true;

//  包装类型  原始类型 对象类型

// 联合类型

let name3: string | number;
console.log(name3!.toString());
name3 = 3;
console.log(name3.toFixed(2));
let num4: string | number;
//类型断言
console.log((num4! as number).toFixed(2));
// 双重断言
num4! as any as boolean;

// 字面量类型
const up: "Up" = "Up";
const down: "Down" = "Down";

type Direction = "up" | "down"; // 可以实现枚举的效果

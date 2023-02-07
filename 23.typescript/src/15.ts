// 类型声明
// 类型声明让我们不需要将js重构为ts 只需要加上声明文件就可以使用系统
// 类型声明在编译的时候会被删除，不会影响真正的代码
// 关键字declare 表示声明的意思 我们可以用它来做出各种声明

// declare var; // 声明全局变量
// declare function // 声明全局方法
// declare class  // 声明全局类
// declare enum  // 声明全局枚举类型
// declare namespace // 声明全局命名空间
// interface和 type // 声明全局类型
export {};
declare let age: number;
declare function getName(): string; // 声明的是类型
declare class Animal {}

// 外部枚举

declare enum Seasons {
  Spring,
  Summer,
  Autumn,
  Winter,
}
let season = [Seasons.Spring, Seasons.Summer, Seasons.Autumn, Seasons.Winter];

// 一个全局变量有很多个子属性 就可以通namespace
// 声明文件里namespace表示一个全局变量包含多个子属性

declare namespace $ {
  function ajax(): void;
}

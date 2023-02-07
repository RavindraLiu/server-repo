// 文件与模块之间的关系
// 模块中可以防止命名空间
export module Table3 {
  export class Book1 {}
  namespace Box1 {
    export const a = 1;
  }
}

export module Table2 {
  export class Book1 {}
  //   在模块中使用export导出的才能被使用
  namespace Box1 {
    export let b = 1;
  }
  Box1.b = 100;
  console.log(Box1.b);
}

export module Table2 {
  export const cc = 1000;
}

// console.log(Table2.Box1.b);
// 相同模块下会被合并

// export 每个文件都是独立的
export class Book1 {}

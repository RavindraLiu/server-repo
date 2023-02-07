// 模块
/**
 *  1. 全局模块
 *  默认情况下, 当你开始在新的ts文件中书写代码的时候，它处于全局模块中
 *  2. 文件模块
 *   文件模块也称为外部模块, 出现export import会生成文件模块
    3. 模块规范  commonjs规范
    4. 命名空间
      1. 在代码量比较大的情况下, 为了避免命名冲突，可以将相似的函数，类，接口放置到命名空间中
      2. 命名空间可以将代码包裹起来，只对外暴露需要访问的对象，命名空间可以通过export进行导出
      3. 命名空间是外部模块, 主要用于组织代码，避免命名冲突问题


      export import 解决全局变量的问题 namespace 解决命名冲突问题
 */

export namespace zoo {
  class Elephant {}
  export class Dog {
    eat() {
      console.log("zoo dog");
    }
  }
  namespace monkeyArea {}
}
export namespace home {
  class Wife {}
  export class Dog {
    eat() {
      console.log("home dog");
    }
  }
}

let dogOfZoom = new zoo.Dog();
dogOfZoom.eat();
let dogOfHome = new home.Dog();
dogOfHome.eat();

/**
 * 文件 模块 命名空间的关系
 */

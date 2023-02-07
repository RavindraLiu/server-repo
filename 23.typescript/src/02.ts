// 函数定义
7;
function hello(name: string) {
  console.log(name, "hello");
}

hello("killian");

// 定义函数类型
type GetName = (firstName: string, lastName: string) => string;
let fn: GetName = (firstName, lastName): string => {
  return firstName + lastName;
};

const Koa = require("koa");

const app = new Koa();
// koa中会将所有 函数串联成一个Promise(每个函数都是一个Promise) **最外层的Promise执行完毕就结束了***

// 这里每个use中的方法都是Promise, 这些Promise会被组合成一个promise, 如果外层的Promise没有等待里层的，会直接结束545
app.use(function (ctx, next) {
  console.log(1);
  ctx.body = "ok1";
  setTimeout(() => {
    next();
  }, 1000);
  console.log(2);
});

app.use(function (ctx, next) {
  console.log(3);
  ctx.body = "ok2";
  next();
  console.log(4);
});

app.use(function (ctx, next) {
  console.log(5);
  ctx.body = "ok3";
  next();
  console.log(6);
});

app.listen(3000, function () {
  console.log("server is running 3000 port");
});

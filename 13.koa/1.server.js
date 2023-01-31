const Koa = require("./koa/application");
const app = new Koa();

// 我们需要制定什么路径和方法 要执行什么操作 路由
app.use(function (ctx, next) {
  // ctx 本地请求的上下文, handleRequest(req, res)
  // koa中的代码都在ctx ctx上的功能有
  console.log(ctx.request.path); // request是koa自己封装的一个请求对象 = ctx.path
  console.log(ctx.req.path); // 原生的koa对象
  console.log(ctx.path); // 原生的koa对象
  console.log(ctx.header);
  console.log(ctx.headers);
});

app.listen(3000, function () {
  console.log("server start 3000");
}); // http,createServer().listen()

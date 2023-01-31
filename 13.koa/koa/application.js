const context = require("./context");
const request = require("./request");
const response = require("./response");

const http = require("http");
class Application {
  constructor() {
    // 为了实现ctx的上下文隔离，每一次new Koa的时候实现一个全新的上下文隔离
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
  }
  use(fn) {
    this.middleware = fn; //
  }
  //   创建上下文
  //   上下文中有原生的req, res, response request
  createContext(req, res) {
    const ctx = Object.create(this.context);
    const request = Object.create(this.request);
    const response = Object.create(this.response);
    ctx.req = req;
    ctx.res = res;

    // koa 扩展的属性
    ctx.request = request;
    ctx.response = response;

    // 保证this的指向
    ctx.request.req = req;
    ctx.request.res = res;

    return ctx;
  }

  handleRequest = (req, res) => {
    // 创建请求隔离， 每一次请求都是独立的, 不会出现复用的属性
    const ctx = this.createContext(req, res);

    // 请求实现
    this.middleware(ctx);
  };

  listen(...args) {
    const server = http.createServer(this.handleRequest);
    server.listen(...args);
  }
}

module.exports = Application;

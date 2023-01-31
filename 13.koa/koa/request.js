const url = require("url");
const request = {
  // request
  get path() {
    // 怎样拿到req? req上有path
    // 这里的this是ctx.request
    return url.parse(this.req.url, true).pathname; // 这样可以拿到原生的req
  },
  get query() {
    return url.parse(this.req.url, true).query;
  },

  get header() {
    return this.req.headers;
  },

  get headers() {
    return this.req.headers;
  },

  //   xxx() {
  // ctx.request.req = req
  //    this = ctx.request
  //   this.req = req
  //   }
};

module.exports = request;

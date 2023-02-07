const http = require("http");
const url = require("url");

// server.on(‘request') 当有请求的时候执行此回到函数
const server = http.createServer(function (req, res) {
  // req 可以存放 请求行 请求头 请求体, req是一个可读流， 所有的信息都可以通过req.on("data")获取到数据
  // res 可以写入 请求行 请求肉 请求体
  //   请求行 GET / 请求版本号
  const method = req.method;
  //   url的信息有哪些 http://www.baidu.com:3000/ccc?a=1&b=2#xxx 拿不到当前的域名信息  服务器无法拿到锚点
  //
  const { pathname, query } = url.parse(req.url, true);
  const httpVersion = req.httpVersion;
  //   console.log(method, pathname, query, httpVersion); 请求头
  console.log(req.headers); // 获取用户的请求头信息
  let arr = [];
  //   请求体
  req.on("data", function (chunk) {
    // 只有传输数据的时候才会被触发
    // push(null)的时候触发end方法，end方法一定会触发的
    arr.push(chunk);
  });
  req.on("end", function () {
    let data = Buffer.concat(arr).toString();
    console.log(data, "----"); // 这里就是接受的请求体
  });

  //  ---响应信息----
  //   响应行的格式 http、1.1 200 ok
  //   状态码 不建议自定义 因为浏览器和服务端，有状态码规则
  res.statusCode = 200;
  res.statusMessage = "custom";
  //   res.setHeader("content-type", "text/plain;charset=utf-8");
  //   Transfer-encoding: chunk 用来表示此http有多长, 用来分割http请求的

  res.end("中文"); // 响应结束了，浏览器认为这次的事务完成了
});

let port = 3000;
server.listen(port, function () {
  // 这个函数是一个订阅，只要启动成功后就会执行此函数
  console.log("server starts:" + port);
});
// 防止端口占用问题
server.on("error", function (err) {
  if (err && err.code === "EADDRINUSE") {
    server.listen(++port);
  }
});

// 为了实现自动重启，可以安装nodemon pm2
// npm install nodemon -g

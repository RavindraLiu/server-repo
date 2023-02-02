const net = require("net"); // net就是tcp模块
const server = net.createServer(function (socket) {
  socket.on("data", function (data) {
    socket.write("hi");
  });
  socket.on("end", function () {
    // 监听服务端的消息s
    console.log("客户端关闭");
  });
});

server.on("error", function (error) {
  console.log(error);
});

// server.listen(8001);

// client => server hello
// server => client hi
// 客户端主动和服务端分开

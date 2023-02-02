const net = require("net"); // net就是tcp模块
const socket = new net.Socket(); // 套字节 双工流

socket.connect(9000, "localhost");
socket.on("connect", function (data) {
  socket.write("hello"); // 浏览器和客户端说 hello
  socket.end();
});

socket.on("data", function (data) {
  // 监听服务端的消息
  console.log(data.toString());
});

socket.on("error", function (error) {
  console.log(error);
});

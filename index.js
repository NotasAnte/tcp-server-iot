const net = require("net");
const PORT = 3000;
const ADDRESS = "localhost";

let server = net.createServer(onClientConnected);
server.listen(PORT, ADDRESS);

// Handler
function onClientConnected(socket) {
  console.log(`New client: ${socket.remoteAddress}:${socket.remotePort}`);
  /**
  * data : Buffer
  */
  socket.on("data", function(data) {
    var msg = data.toString("utf-8");
    console.log("Get data " + msg);
    if ((msg = "01")) {
      console.log("01 invoke");
      socket.write("Message  form server to client");
    }
    
  });
}
console.log(`Server started at: ${ADDRESS}:${PORT}`);
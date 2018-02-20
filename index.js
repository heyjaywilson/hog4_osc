var osc = require("osc"),
  express = require("express"),
  WebSocket = require("ws");

function getIPAddresses() {
  var os = require("os"),
    interfaces = os.networkInterfaces(),
    ipAddresses = [];

  for (var deviceName in interfaces) {
    var addresses = interfaces[deviceName];
    for (var i = 0; i < addresses.length; i++) {
      var addressInfo = addresses[i];
      if (addressInfo.family === "IPv4" && !addressInfo.internal) {
        ipAddresses.push(addressInfo.address);
      }
    }
  }
  return ipAddresses;
}

var udpPort = new osc.UDPPort({
  localAddress: "0.0.0.0",
  localPort: 57121
});

udpPort.on("ready", function() {
  var ipAddresses = getIPAddresses();
  console.log("Listening for OSC over UDP. ");
  ipAddresses.forEach(function(address) {
    console.log("Host: ", address + ", port: " + udpPort.options.localPort);
  });
  console.log(
    "to start the demo, go to http://localhost:8081 in your web browser"
  );
});

udpPort.open();

var appResources = __dirname + "/web",
  app = express(),
  server = app.listen(8081),
  wss = new WebSocket.Server({
    server: server
  });

app.use("/", express.static(appResources));

wss.on("connection", function(socket) {
  console.log("a web socket connection has been established");
  var socketPort = new osc.WebSocketPort({ socket: socket });

  var relay = new osc.Relay(udpPort, socketPort, {
    raw: true
  });
});

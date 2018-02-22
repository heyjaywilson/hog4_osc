var osc = require("osc"),
  WebSocket = require("ws");

var getIPAddresses = function() {
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
};

// Bind to a UDP socket to listen for incoming OSC events.
var udpPort = new osc.UDPPort({
  localAddress: "0.0.0.0",
  localPort: 57122,
  remoteAddress: "192.168.0.100",
  remotePort: 7001
});

udpPort.on("ready", function() {
  var ipAddresses = getIPAddresses();
  console.log("Listening for OSC over UDP.");
  ipAddresses.forEach(function(address) {
    console.log(" Host:", address + ", Port:", udpPort.options.localPort);
  });
});

var wss = new WebSocket.Server({
  port: 8081
});
udpPort.open();

wss.on("connection", function(socket) {
  console.log("A Web Socket connection has been established!");
  var socketPort = new osc.WebSocketPort({
    socket: socket
  });

  var relay = new osc.Relay(udpPort, socketPort, {
    raw: true
  });
});

var osc = require("osc");

/**
 * TODO: Insert serial port info. Need to research more
 */

/**
 *  OSC over UDP
 */

var getIPAddresses = function() {
  var os = require("os"),
    interfaces = os.networkInterfaces,
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

var udpPort = new osc.UDPPort({
  localAddress: "192.168.0.22",
  localPort: 1001,
  remotePort: 2001, //Hog console port number
  remoteAddress: "192.168.0.200" // Hog console IP Address.
});

var isPortReady = udpPort.on("ready", function() {
  /**
   * When port is ready to send/receive a message this is fired
   */
  var ipAddresses = getIPAddresses();
  console.log("listening for OSC over UDP. ");

  ipAddresses.forEach(function(address) {
    console.log("Host:" + address + ", Port: " + udpPort.options.localPort);
  });

  return true;
});

var getMessage = udpPort.on("message", function(oscMessage) {
  /**
   * Fires when message is received.
   * complete on another version
   */
  console.log("Message is received");
});

var sendGo1 = udpPort.send({
  address: "/ hog / playback / go / 0 / 1", // string the hog is listening for
  args: [{}]
});

var functions = [isPortReady(), getMessage(), sendGo1()];

export default functions;

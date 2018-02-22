var port = new osc.WebSocketPort({
  url: "ws://localhost:8081"
});

port.open();

var goCL = function(num) {
  var message = "/hog/playback/go/0/" + num;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: "1"
      }
    ]
  });
  console.log("sending message: " + message);
};

var pauseCL = function(num) {
  var message = "/hog/playback/halt/0/" + num;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: "1"
      }
    ]
  });
  console.log("sending message: " + message);
};

var releaseCL = function(num) {
  var message = "/hog/playback/release/0/" + num;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: "1"
      }
    ]
  });
  console.log("sending message: " + message);
};

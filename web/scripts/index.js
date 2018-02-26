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

var getText = function(id) {
  let text = document.getElementById(id)[0].value;
  return Array.from(text);
};

var highlight = function() {
  let button_pushes = getText("fixtureSelect");
  console.log(button_pushes);
  let mess = "/hog/hardware/highlight";
};

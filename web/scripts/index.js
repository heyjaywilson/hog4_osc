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

var getButtonPushes = function(arr) {
  arr.forEach(function(bttn) {
    switch (bttn) {
      case "1":
        console.log("button pushed 1");
        sendButtonPush("one");
        break;
      case "2":
        console.log("button pushed 2");
        sendButtonPush("two");
        break;
      case "3":
        console.log("button pushed 3");
        break;
      case "4":
        console.log("button pushed 4");
        break;
      case "5":
        console.log("button pushed 5");
        break;
      case "6":
        console.log("button pushed 6");
        break;
      case "7":
        console.log("button pushed 7");
        break;
      case "8":
        console.log("button pushed 8");
        break;
      case "9":
        console.log("button pushed 9");
        break;
      case "0":
        console.log("button pushed 0");
        break;
      case "+":
        console.log("button pushed +");
        break;
      case "-":
        console.log("button pushed -");
        break;
      case ">":
        console.log("button pushed thru");
        break;
      default:
        alert(bttn + " is not a valid Hog hardware button");
    }
  });
};

var sendButtonPush = function(button) {
  var message = "/hog/hardware/" + button;
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: 0
      }
    ]
  });
  port.send({
    address: message,
    args: [
      {
        type: "f",
        value: 1
      }
    ]
  });
  console.log("sending message: " + message);
};

var highlight = function() {
  let button_pushes = getText("fixtureSelect");
  getButtonPushes(button_pushes);
  console.log(button_pushes);
  let mess = "/hog/hardware/highlight";
};

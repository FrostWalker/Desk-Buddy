chrome.runtime.onMessageExternal.addListener(function(message, sender, respond) {
  console.log(message);
  // console.log(sender);
	writeSerial(message, function(e) {
		console.log(e);
	});
	console.log(message);
	respond(message);
});

var onGetDevices = function(ports) {
  for (var i=0; i<ports.length; i++) {
    console.log(ports[i].path);
  }
}
var connectionId;

chrome.serial.getDevices(function(devices) {
	chrome.serial.connect(devices[0].path, {persistent: true, bitrate: 9600}, function(info) {
		connectionId = info.connectionId;
		writeSerial('1', function(e) {

		});
	});
});


function writeSerial(str, success) {
  chrome.serial.send(connectionId, convertStringToArrayBuffer(str), success);
}

function convertStringToArrayBuffer(str) {
  var buf=new ArrayBuffer(str.length);
  var bufView=new Uint8Array(buf);
  for (var i=0; i<str.length; i++) {
    bufView[i]=str.charCodeAt(i);
  }
  return buf;
}


//"transient": true

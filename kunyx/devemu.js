'use strict';

angular.module('xrpcJsonApp')
//.controller('devemuCtrl', ['$scope', 'jsonrpc', 'MqttClient', '$rootScope', function($scope, jsonrpc, MqttClient, $rootScope) {
.controller('devemuCtrl', ['$scope', 'jsonrpc', '$rootScope', function($scope, jsonrpc, $rootScope) {
  $scope.POS_display_msg = "POS_display_msg";
  $scope.POS_printer_msg = 'POS_printer_msg';
  
  $scope.Mqtt_run = function () {
	var topic_display = "Kunyx/Display/DEMO-POS"
	var topic_printer = "Kunyx/Printer/DEMO-POS"
	// Create a client instance
	var _ip = "kunyx";
	var _port = 9001;
	var _id = "devemu";
	//var client = new Paho.MQTT.Client(_ip, Number(_port), "/ws",  _id);
	var client = new Paho.MQTT.Client(_ip, _port, "/ws", _id);
	// set callback handlers
	client.onConnectionLost = onConnectionLost;
	client.onMessageArrived = onMessageArrived;
	// connect the client
	client.connect({onSuccess:onConnect});
  }
  
	// called when the client connects
	function onConnect() {
	  // Once a connection has been made, make a subscription and send a message.
	  console.log("onConnect");
	  var kunyx_qos = {qos: 1}
	  client.subscribe(topic_display, kunyx_qos);
	  client.subscribe(topic_printer, kunyx_qos);
	  //message = new Paho.MQTT.Message("Hello");
	  //message.destinationName = "/World";
	  //client.send(message);
	}

	// called when the client loses its connection
	function onConnectionLost(responseObject) {
	  if (responseObject.errorCode !== 0) {
		console.log("onConnectionLost:"+responseObject.errorMessage);
	  }
	}

	// called when a message arrives
	function onMessageArrived(message) {
	  console.log("onMessageArrived:"+message.payloadString);
	  if (message.topicString == topic_display)
		  $scope.POS_display_msg = message.payloadString;
	  if (message.topicString == topic_printer)
		  $scope.POS_printer_msg = message.payloadString;
	}

  var kunyx = {MAC_CIM: '', NET_INTF: '', KUNYX_PLTF: '', KUNYX_ARCH: '', KUNYX_ELEM: '', };
  $scope.MAC_info = function () {
    jsonrpc
    .request('kunyx_rgmacs', {})
    .then(function(result) {
	  if (result.kunyx_rgmacs[0].KUNYX_ELEM == 'x_srv') {
		  kunyx.MAC_CIM = result.kunyx_rgmacs[0].MAC_CIM;
		  kunyx.NET_INTF = result.kunyx_rgmacs[0].NET_INTF;
		  kunyx.KUNYX_PLTF = result.kunyx_rgmacs[0].KUNYX_PLTF;
		  kunyx.KUNYX_ARCH = result.kunyx_rgmacs[0].KUNYX_ARCH;
		  kunyx.KUNYX_ELEM = result.kunyx_rgmacs[0].KUNYX_ELEM;
	  }
      $scope.result = result.kunyx_rgmacs;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.MAC_info();
  $scope.Mqtt_run();
}]);

//client = new Paho.MQTT.Client(location.hostname, Number(location.port), "clientId");
//.request('kunyx_rgmacs', params)

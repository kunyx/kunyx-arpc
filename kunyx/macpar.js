'use strict';

angular.module('xrpcJsonApp')
.controller('macparCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
  var params = { pub_mac: 'kunyx', sub_mac: 'kunyx'};
  $scope.macparSlt = function () {
    if ($scope.pub_mac != undefined) params.pub_mac = $scope.pub_mac;
    if ($scope.sub_mac != undefined) params.sub_mac = $scope.sub_mac;
    console.log(params);
    jsonrpc
    .request('macpar_slt', params)
    .then(function(result) {
      $scope.result = result.macpar_slt;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.macparUpd = function () {
    params.pub_mac = $scope.pub_mac;
    params.sub_mac = $scope.sub_mac;
    console.log(params);
    jsonrpc
    .request('macpar_upd', params)
    .then(function(result) {
      $scope.result = result.macpar_upd;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.macparIns = function () {
    params.pub_mac = $scope.pub_mac;
    params.sub_mac = $scope.sub_mac;
    console.log(params);
    jsonrpc
    .request('macpar_ins', params)
    .then(function(result) {
      $scope.result = result.macpar_ins;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.macparDel = function () {
    params.pub_mac = $scope.pub_mac;
    params.sub_mac = $scope.sub_mac;
    console.log(params);
    jsonrpc
    .request('macpar_del', params)
    .then(function(result) {
      $scope.result = result.macpar_del;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.arpNmacs = function () {
    console.log(params);
    jsonrpc
    .request('arpn_macs', params)
    .then(function(result) {
      $scope.arpn_macs = result.arpn_macs;
      console.log(result.arpn_macs);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  //$scope.macparSlt();
  $scope.arpNmacs();
}]);

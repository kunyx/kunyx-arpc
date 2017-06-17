'use strict';

angular.module('xrpcJsonApp')
.controller('userCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
  var params = { nev: '', xun: '', xpw: ''};
  $scope.userIns = function () {
    params.nev = $scope.u_nev;
    params.xun = $scope.u_xun;
    params.xpw = $scope.u_xpw;
    console.log(params);
    jsonrpc
    .request('xusers_ins', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.userUpd = function () {
    params.nev = $scope.u_nev;
    params.xun = $scope.u_xun;
    params.xpw = $scope.u_xpw;
    console.log(params);
    jsonrpc
    .request('xusers_upd', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.userSlt = function () {
    params.nev = $scope.u_nev;
    params.xun = $scope.u_xun;
    console.log(params);
    jsonrpc
    .request('xusers_slt', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
}]);

'use strict';

angular.module('xrpcJsonApp')
.controller('taxdptCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
  var params = {kod: '', xky: '', inf: ''};
  $scope.taxdptSlt = function () {
    params.kod = $scope.d_kod;
    params.xky = $scope.d_xky;
    console.log(params);
    jsonrpc
    .request('taxdpt_slt', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.taxdptUpd = function () {
    params.kod = $scope.d_kod;
    params.xky = $scope.d_xky;
    params.inf = $scope.d_inf;
    console.log(params);
    jsonrpc
    .request('taxdpt_upd', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.taxdptIns = function () {
    params.kod = $scope.d_kod;
    params.xky = $scope.d_xky;
    params.inf = $scope.d_inf;
    console.log(params);
    jsonrpc
    .request('taxdpt_upd', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.taxdptDel = function () {
    params.kod = $scope.d_kod;
    console.log(params);
    jsonrpc
    .request('taxdpt_del', params)
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

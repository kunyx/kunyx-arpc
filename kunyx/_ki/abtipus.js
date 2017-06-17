'use strict';

angular.module('xrpcJsonApp')
.controller('abtipusCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
  var params = {kod: '', nev: ''};
  $scope.abtipusSlt = function () {
    params.kod = $scope.bt_kod;
    params.nev = $scope.bt_nev;
    console.log(params);
    jsonrpc
    .request('abtipus_slt', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.abtipusUpd = function () {
    params.kod = $scope.bt_kod;
    params.nev = $scope.bt_nev;
    console.log(params);
    jsonrpc
    .request('abtipus_upd', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.abtipusIns = function () {
    params.kod = $scope.bt_kod;
    params.nev = $scope.bt_nev;
    console.log(params);
    jsonrpc
    .request('abtipus_ins', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.abtipusDel = function () {
    params.kod = $scope.bt_kod;
    console.log(params);
    jsonrpc
    .request('abtipus_del', params)
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

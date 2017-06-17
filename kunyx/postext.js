'use strict';

angular.module('xrpcJsonApp')
.controller('postextCtrl', ['$scope', 'jsonrpc', '$rootScope', function($scope, jsonrpc, $rootScope) {
  var params = {szoveg_1: '', Szoveg_2: ''};
  $scope.postextSlt = function () {
    if ($scope.szoveg_1 != undefined) params.szoveg_1 = $scope.szoveg_1;
    if ($scope.Szoveg_2 != undefined) params.Szoveg_2 = $scope.Szoveg_2;
    console.log(params);
    jsonrpc
    .request('postext_slt', params)
    .then(function(result) {
      $scope.result = result.postext_slt;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.postextUpd = function () {
    params.szoveg_1 = $scope.szoveg_1;
    params.Szoveg_2 = $scope.Szoveg_2;
    console.log(params);
    jsonrpc
    .request('postext_upd', params)
    .then(function(result) {
      $scope.result = result.postext_upd;
      //console.log(result);
      alert(result);
    })
    .catch(function(error) {
      $scope.error = error;
      //console.log(error);
      alert(error);
    });
  }
  $scope.postextIns = function () {
    params.szoveg_1 = $scope.szoveg_1;
    params.Szoveg_2 = $scope.Szoveg_2;
    console.log(params);
    jsonrpc
    .request('postext_ins', params)
    .then(function(result) {
      $scope.result = result.postext_ins;
      //console.log(result);
      alert(result);
    })
    .catch(function(error) {
      $scope.error = error;
      //console.log(error);
      alert(error);
    });
  }
  $scope.postextDel = function () {
    params.szoveg_1 = $scope.szoveg_1;
    console.log(params);
    jsonrpc
    .request('postext_del', params)
    .then(function(result) {
      $scope.result = result.postext_del;
      //console.log(result);
      alert(result);
    })
    .catch(function(error) {
      $scope.error = error;
      //console.log(error);
      alert(error);
    });
  }
  $scope.selectPtxt = function (item) {
    $rootScope.grp_ = item.szoveg_1;
    $scope.szoveg_1 = item.szoveg_1;
    $scope.Szoveg_2 = item.Szoveg_2;
    console.log('grp: ' + $rootScope.grp_);
    console.log('txk: ' + $rootScope.txk_);
  }
}]);

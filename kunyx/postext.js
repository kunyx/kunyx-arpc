'use strict';

angular.module('xrpcJsonApp')
.controller('postextCtrl', ['$scope', 'jsonrpc', '$rootScope', function($scope, jsonrpc, $rootScope) {
  var params = {SZOVEG_1: 'kunyx', SZOVEG_2: 'kunyx'};
  $scope.postextSlt = function () {
    if ($scope.szoveg_1 != undefined) params.SZOVEG_1 = $scope.szoveg_1;
    if ($scope.szoveg_2 != undefined) params.SZOVEG_2 = $scope.szoveg_2;
    //console.log(params);
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
    params.SZOVEG_1 = $scope.szoveg_1;
    params.SZOVEG_2 = $scope.szoveg_2;
    console.log(params);
    jsonrpc
    .request('postext_upd', params)
    .then(function(result) {
      $scope.result = result.postext_upd;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.selectPostxt = function (item) {
    $rootScope.ptx_ = item.SZOVEG_1;
    $scope.szoveg_1 = item.SZOVEG_1;
    $scope.szoveg_2 = item.SZOVEG_2;
    console.log('ptx: ' + $rootScope.ptx_);
  }
}]);

/*
  $scope.postextIns = function () {
    params.SZOVEG_1 = $scope.szoveg_1;
    params.SZOVEG_2 = $scope.szoveg_2;
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
    params.SZOVEG_1 = $scope.szoveg_1;
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
*/

'use strict';

angular.module('xrpcJsonApp')
.controller('taxkeyCtrl', ['$scope', 'jsonrpc', '$rootScope', function($scope, jsonrpc, $rootScope) {
  var params = {kod: '', afa: '', inf: ''};
  $scope.inf = '20150101-' + tomorrow();
  console.log($scope.inf);
  $scope.taxkeySlt = function () {
    if ($scope.kod != undefined) params.kod = $scope.kod;
    if ($scope.inf != undefined) params.inf = $scope.inf;
    else params.inf = '20150101-' + tomorrow();
    console.log(params);
    jsonrpc
    .request('taxkey_slt', params)
    .then(function(result) {
      $scope.result = result.taxkey_slt;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.taxkeyUpd = function () {
    params.kod = $scope.kod;
    params.afa = $scope.afa;
    params.inf = $rootScope.dbu_;
   console.log(params);
    jsonrpc
    .request('taxkey_upd', params)
    .then(function(result) {
      $scope.result = result.taxkey_upd;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.taxkeyIns = function () {
    params.kod = $scope.kod;
    params.afa = $scope.afa;
    params.inf = $rootScope.dbu_;
    console.log(params);
    jsonrpc
    .request('taxkey_ins', params)
    .then(function(result) {
      $scope.result = result.taxkey_ins;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.taxkeyDel = function () {
    params.kod = $scope.kod;
    console.log(params);
    jsonrpc
    .request('taxkey_del', params)
    .then(function(result) {
      $scope.result = result.taxkey_del;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  //$scope.selectTxk = function (txk) {
  $scope.selectTxk = function (item) {
    $rootScope.txk_ = item.kod[0];
    $scope.kod = item.kod[0];
    $scope.afa = item.afa;
    console.log('txk: ' + $rootScope.txk_);
    console.log('grp: ' + $rootScope.grp_);
  }
}]);

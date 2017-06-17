'use strict';

angular.module('xrpcJsonApp')
.controller('groupCtrl', ['$scope', 'jsonrpc', '$rootScope', function($scope, jsonrpc, $rootScope) {
  var params = {kod: '', nev: ''};
  $scope.groupSlt = function () {
    if ($scope.kod != undefined) params.kod = $scope.kod;
    if ($scope.nev != undefined) params.nev = $scope.nev;
    console.log(params);
    jsonrpc
    .request('group_slt', params)
    .then(function(result) {
      $scope.result = result.group_slt;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.groupUpd = function () {
    params.kod = $scope.kod;
    params.nev = $scope.nev;
    console.log(params);
    jsonrpc
    .request('group_upd', params)
    .then(function(result) {
      $scope.result = result.group_upd;
      //console.log(result);
      alert(result);
    })
    .catch(function(error) {
      $scope.error = error;
      //console.log(error);
      alert(error);
    });
  }
  $scope.groupIns = function () {
    params.kod = $scope.kod;
    params.nev = $scope.nev;
    console.log(params);
    jsonrpc
    .request('group_ins', params)
    .then(function(result) {
      $scope.result = result.group_ins;
      //console.log(result);
      alert(result);
    })
    .catch(function(error) {
      $scope.error = error;
      //console.log(error);
      alert(error);
    });
  }
  $scope.groupDel = function () {
    params.kod = $scope.kod;
    console.log(params);
    jsonrpc
    .request('group_del', params)
    .then(function(result) {
      $scope.result = result.group_del;
      //console.log(result);
      alert(result);
    })
    .catch(function(error) {
      $scope.error = error;
      //console.log(error);
      alert(error);
    });
  }
  $scope.selectGrp = function (item) {
    $rootScope.grp_ = item.kod;
    $scope.kod = item.kod;
    $scope.nev = item.nev;
    console.log('grp: ' + $rootScope.grp_);
    console.log('txk: ' + $rootScope.txk_);
  }
}]);

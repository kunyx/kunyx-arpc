'use strict';

angular.module('xrpcJsonApp')
.controller('abadatCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
  var params = {kod: '', pid: '', did: '', bertek: '', dbu: ''};
  $scope.abadatSlt = function () {
    params.kod = $scope.ba_kod;
    params.pid = $scope.ba_pid;
    params.did = $scope.ba_did;
    console.log(params);
    jsonrpc
    .request('abadat_slt', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.abadatUpd = function () {
    params.kod = $scope.ba_kod; ///
    params.pid = $scope.ba_pid;
    params.did = $scope.ba_did;
    params.bertek = $scope.ba_bertek; ///
    params.dbu = $scope.ba_dbu; ///
   console.log(params);
    jsonrpc
    .request('abadat_upd', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.abadatIns = function () {
    params.kod = kunyx_sysdt(); ///
    params.pid = $scope.ba_pid;
    params.did = $scope.ba_did;
    params.bertek = $scope.ba_bertek; ///
    params.dbu = $scope.ba_dbu; ///
    console.log(params);
    jsonrpc
    .request('abadat_ins', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.abadatDel = function () {
    params.kod = $scope.ba_kod;
    params.pid = $scope.ba_pid;
    params.did = $scope.ba_did;
    console.log(params);
    jsonrpc
    .request('abadat_del', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  var kunyx_sysdt = function () {
    var resObj = {};
    jsonrpc
    .request('kunyx_sysdt', {sys_dtf: 'YYYYMMDDhhmmss'})
    .then(function(result) {
      console.log(result);
      resObj = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
    return resObj.kunyx_sysdt.sys_dt;
  }
}]);

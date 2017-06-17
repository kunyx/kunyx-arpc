'use strict';

angular.module('xrpcJsonApp')
.controller('ceginfoCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
  var params = {kod: '', nev: '', oid: '', asz: '', iban: '', bank: '', dbu: ''};
  $scope.ceginfoSlt = function () {
    params.kod = $scope.c_kod;
    params.nev = $scope.c_nev;
    params.oid = $scope.c_oid;
    console.log(params);
    jsonrpc
    .request('ceginfo_slt', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.ceginfoUpd = function () {
    params.kod = $scope.c_kod;
    params.nev = $scope.c_nev;
    params.oid = $scope.c_oid;
    params.asz = $scope.c_asz;
    params.iban = $scope.c_iban;
    params.bank = $scope.c_bank;
    params.dbu = $scope.c_dbu;
    console.log(params);
    jsonrpc
    .request('ceginfo_upd', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.ceginfoIns = function () {
    params.kod = $scope.c_kod;
    params.nev = $scope.c_nev;
    params.oid = $scope.c_oid;
    params.asz = $scope.c_asz;
    params.iban = $scope.c_iban;
    params.bank = $scope.c_bank;
    params.dbu = $scope.c_dbu;
    console.log(params);
    jsonrpc
    .request('ceginfo_ins', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.ceginfoDel = function () {
    params.kod = $scope.c_kod;
    console.log(params);
    jsonrpc
    .request('ceginfo_del', params)
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

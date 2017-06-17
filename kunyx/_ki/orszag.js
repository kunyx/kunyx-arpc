'use strict';

angular.module('xrpcJsonApp')
.controller('orszagCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
  var params = {kod: '', nev: '', fek: ''};
  $scope.orszagSlt = function () {
    params.kod = $scope.o_kod;
    params.nev = $scope.o_nev;
    console.log(params);
    jsonrpc
    .request('orszag_slt', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.orszagUpd = function () {
    params.kod = $scope.o_kod;
    params.nev = $scope.o_nev;
    params.fek = $scope.o_fek;
    console.log(params);
    jsonrpc
    .request('orszag_upd', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.orszagIns = function () {
    params.kod = $scope.o_kod;
    params.nev = $scope.o_nev;
    params.fek = $scope.o_fek;
    console.log(params);
    jsonrpc
    .request('orszag_ins', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.orszagDel = function () {
    params.kod = $scope.o_kod;
    console.log(params);
    jsonrpc
    .request('orszag_del', params)
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

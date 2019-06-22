'use strict';

angular.module('xrpcJsonApp')
.controller('stornoCtrl',
['$scope', 'jsonrpc', '$rootScope',
  function($scope, jsonrpc, $rootScope) {
    var params = { kod: '', afa: '', inf: '' };
    $scope.inf = '20150101-' + holnap();
    console.log($scope.inf);
    $scope.stornoSlt = function () {
      if ($scope.kod != undefined) params.kod = $scope.kod;
      if ($scope.inf != undefined) params.inf = $scope.inf;
      else params.inf = '20150101-' + holnap();
      console.log(params);
      jsonrpc
      .request('storno_slt', params)
      .then(function(result) {
        $scope.result = result.storno_slt;
        console.log(result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log(error);
      });
    }
    $scope.stornoIns = function () {
      params.kod = $scope.kod;
      params.afa = $scope.afa;
      params.inf = mainap() +'-'+ $rootScope.dbu_;
      console.log(params);
      jsonrpc
      .request('storno_ins', params)
      .then(function(result) {
        $scope.result = result.storno_ins;
        console.log(result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log(error);
      });
    }
    $scope.stornoUpd = function () {
      params.kod = $scope.kod;
      params.afa = $scope.afa;
      params.inf = mainap() +'-'+ $rootScope.dbu_;
    console.log(params);
      jsonrpc
      .request('storno_upd', params)
      .then(function(result) {
        $scope.result = result.storno_upd;
        console.log(result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log(error);
      });
    }
    $scope.selectStorno = function (item) {
      $rootScope.txk_ = item.kod[0];
      $scope.kod = item.kod[0];
      $scope.afa = item.afa;
      console.log('txk: ' + $rootScope.txk_);
      //console.log('grp: ' + $rootScope.grp_);
    }
    /*$scope.stornoDel = function () {
      params.kod = $scope.kod;
      console.log(params);
      jsonrpc
      .request('storno_del', params)
      .then(function(result) {
        $scope.result = result.storno_del;
        console.log(result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log(error);
      });
    }*/
  }
]);

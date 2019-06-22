'use strict';

angular.module('xrpcJsonApp')
.controller('taxkeyCtrl', ['$scope', 'jsonrpc', //'$rootScope',
  function($scope, jsonrpc) { //, $rootScope
    var params = { kod: '', afa: '', inf: '' };
    $scope.inf = '20150101-' + holnap();
    $scope.afaList = [];
    console.log($scope.inf);
    $scope.taxkeySlt = function () {
      if ($scope.kod != undefined) params.kod = $scope.kod;
      if ($scope.inf != undefined) params.inf = $scope.inf;
      else params.inf = '20150101-' + holnap();
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
    $scope.new_kod = function () {
      var newChar = 'A';
      var listLength = $scope.afaList.length;
      console.log('listLenght: ', listLength);
      if (listLength > 0) {
        var lastObj = $scope.afaList[listLength -1];
        var ch_code = lastObj.kod.charCodeAt(0);
        var lastPlusOne  = String.fromCharCode(ch_code + 1).toUpperCase();
        newChar = lastPlusOne;
      }
      console.log('newChar: ', newChar);
      return newChar;
    }   
    $scope.taxkeyIns = function () {
      params.kod = $scope.new_kod();
      params.afa = $scope.afa;
      params.inf = mainap() +'-'+ 'TEST'; // $rootScope.dbu_
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
    $scope.taxkeyUpd = function () {
      params.kod = $scope.kod;
      params.afa = $scope.afa;
      params.inf = mainap() +'-'+ 'TEST'; // $rootScope.dbu_
    console.log('params', params);
      jsonrpc
      .request('taxkey_upd', params)
      .then(function(result) {
        $scope.result = result.taxkey_upd;
        console.log('result', result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log('error', error);
      });
    }
    $scope.upd_or_add = function (eset) {
      var res = false;
      if (eset == 'upd' && $scope.afa_afa != 'add_new' && $scope.afa_afa != undefined)
        res = true;
      if (eset == 'add' && ($scope.afa_afa == 'add_new' || $scope.afa_afa == undefined))
        res = true;
      console.log('upd_or_add', eset, res);
      return res;
    }
    $scope.selectTxk = function (item) {
      $scope.afa = item.afa;
      $scope.kod = item.kod[0];
      /* $rootScope.txk_ = item.kod[0];
      console.log('txk:', $rootScope.txk_); */
    }
    $scope.onDdl_change = function () {
      console.log('afa_afa', $scope.afa_afa);
      for (const item of $scope.result) {
        if (item.afa == $scope.afa_afa)
        $scope.selectTxk(item);
      }
    }
    $scope.ddl_afaList = function () {
      console.log('params', params);
      jsonrpc
      .request('taxkey_slt', params)
      .then(function(result) {
        $scope.result = result.taxkey_slt;
        console.log('result', result);
        for (const item of $scope.result) {
          $scope.afaList.push(item);
        }
      })
      .catch(function(error) {
        $scope.error = error;
        console.log('error', error);
      });
    }
    $scope.ddl_afaList();
}]);

/*$scope.taxkeyDel = function () {
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
}*/

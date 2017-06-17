'use strict';

angular.module('xrpcJsonApp')
.controller('backupCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
	$scope.downloadKunyxJSON = function () {
		var fajl_nev = 'kunyx_system.json';
		var params = {};
		jsonrpc.request('kunyx_db2json', params).then(function(result) {
			$scope.kunyx = result;
			var kunyx_json = angular.toJson($scope.kunyx); 
			var blob = new Blob([kunyx_json], { type:"application/json;charset=utf-8;" });			
			var downloadLink = angular.element('<a></a>');
		        downloadLink.attr('href', window.URL.createObjectURL(blob));
		        downloadLink.attr('download', fajl_nev);
			downloadLink[0].click();
			console.log($scope.kunyx);
		}).catch(function(error) {
			$scope.kunyx = { 'kunyx': error };
			console.log($scope.kunyx);
		});
	}
}]);

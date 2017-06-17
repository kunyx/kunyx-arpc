'use strict';

angular.module('xrpcJsonApp')
.controller('sysdtCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
	jsonrpc
	.request('kunyx_sysdt', {sys_dtf: 'YYYYMMDDhhmmss'})
	.then(function(result) {
		console.log(result);
		$scope.result = result;
	})
	.catch(function(error) {
		console.log(error);
		$scope.error = error;
	});
}]);

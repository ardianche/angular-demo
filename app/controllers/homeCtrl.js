angular.module('myApp')
.controller('homeCtrl',['$scope','$http',function ($scope,$http){

	var vm = $scope;

	vm.search_value = "";

	vm.endpoint = `https://images-api.nasa.gov/search?q=planets&media_type=image`;

	vm.retrieved_images = null;

	vm.display_images = [];

	this.$onInit = function (){
		vm.general_search();
	}

	vm.selected_item = null;

	if(vm.retrieved_images != null){
		vm.retrieved_images.collection.items = vm.retrieved_images.collection.items.slice(1,10);
	}

	vm.selectItem = function (item) {
		vm.selected_item = item;
	}


	vm.searchItem = function (){
		vm.general_search();
	}

	vm.general_search = function () {
		console.log('vm : ', vm.search_value);
		if(vm.search_value){
			vm.endpoint = `https://images-api.nasa.gov/search?q=${vm.search_value}`;
		}else {
			vm.endpoint = `https://images-api.nasa.gov/search?q=planets&media_type=image`;
		}
		$http({
			method:'GET',
			url: vm.endpoint
		}).then((res)=>{
			console.log('res',res);
			vm.retrieved_images = res.data;
		});
	}
}]);
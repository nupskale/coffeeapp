app.factory('cartCoffee', function(){
	var service = {};
	service.sendName = function(data){
		this.data = data;
	}
	service.getName = function(){
		return this.data;
	}
	service.sendData = function(arr){
		this.arr = arr;
	}
	service.getData = function(){
		return this.arr;
	}
	service.sendPrice = function(price){
		this.price = price;
	}
	service.getPrice = function() {
		return this.price;
	}
	service.sendSize = function(size){
		this.size = size;
	}
	service.getSize = function() {
		return this.size;
	}
	return service;
});
app.controller('LoginCtrl', function($scope, $stateParams){
});

app.controller('coffeeOptCtrl', function($scope, $stateParams, $state, cartCoffee) {

	$scope.coffeeArray = [
		{'name':'Cappuccino', 'details':[
			{'size':'Short', 'price': '$2.99'}, 
			{'size':'Tall', 'price': '$3.99'},
			{'size':'Grande', 'price': '$4.99'}
			]
		}, 
		{'name':'Macchiato', 'details':[
			{'size':'Short', 'price': '$3.49'}, 
			{'size':'Tall', 'price': '$4.49'},
			{'size':'Grande', 'price': '$5.49'}
			]
		}, 
		{'name':'Latte', 'details':[
			{'size':'Short', 'price': '$3.99'}, 
			{'size':'Tall', 'price': '$4.99'},
			{'size':'Grande', 'price': '$5.99'}
			]
		}
		];


	$scope.selectCoffee = function(coffeename){
		cartCoffee.sendName(coffeename);
		cartCoffee.sendData($scope.coffeeArray);
		$state.go('size');
	};
});

app.controller('SizeCtrl', function($scope, $state, $stateParams, cartCoffee){
	$scope.selCoffee = function(){
		return cartCoffee.getName();
	};

	$scope.coffeeOptions = cartCoffee.getData();

	$scope.showPrice = function(csize){
		for(var i=0; i<$scope.coffeeOptions.length; i++) {
		  for(key in $scope.coffeeOptions[i]) {
		    if($scope.coffeeOptions[i][key].indexOf($scope.selCoffee())!=-1){
		      $scope.cIndex = i;
		    }
		  }
		}
		if(csize == 'Short'){
			$scope.priceIndex = 0;
		}
		else if(csize == 'Tall'){
			$scope.priceIndex = 1;
		}
		else if(csize == 'Grande'){
			$scope.priceIndex = 2;
		}	

		$scope.price = $scope.coffeeOptions[$scope.cIndex].details[$scope.priceIndex].price;	
		return $scope.price;
	};

	$scope.selectSize = function(fsize, cprice){
		cartCoffee.sendPrice(cprice);	
		cartCoffee.sendSize(fsize);
		$state.go('confirm');
	}

});


app.controller('OrderConfirmCtrl', function($scope, $state, $stateParams, cartCoffee){
	$scope.finalPrice = function(){
		return cartCoffee.getPrice();
	}
	$scope.finalCoffee = function(){
		return cartCoffee.getName();
	}
	$scope.finalSize = function(){
		return cartCoffee.getSize();
	}
});

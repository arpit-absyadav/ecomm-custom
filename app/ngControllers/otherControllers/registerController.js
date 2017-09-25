	ecomm.controller('registerController', function($rootScope, $scope, $http, $location) {
	  console.log('from registerController');
	  $scope.registerUser = function(user_data){
		   $http.post('/users', user_data).then(function(res) {
                    if (res.data.success == false) {
                        $('#error').text('Not the same password.');
                            $('#error').css('color', 'red');
                            $('#email').css('border', 'solid 2px red');
                    }
                    if (res.data.success == true) {
                        $('#userform')[0].reset();
                       console.log(res);
                    }
                });
	  
			}



	  });
	
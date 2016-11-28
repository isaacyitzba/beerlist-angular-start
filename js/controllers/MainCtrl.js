app.controller('MainCtrl',function($scope, beerService){
  $scope.beers = beerService.beers;
  $scope.newBeer ={};
  
  $scope.addBeer = function(){
    beerService.addBeer($scope.newBeer);
  }
   $scope.removeBeer = function(index){
    beerService.removeBeer(index);
  }

})
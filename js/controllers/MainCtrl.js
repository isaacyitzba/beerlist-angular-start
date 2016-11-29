app.controller('MainCtrl',function($scope, beerService){
  $scope.beers = beerService.beers;
  $scope.newBeer ={};
  
  $scope.addBeer = function(){
    beerService.addBeer($scope.newBeer);
  }
   $scope.removeBeer = function(index){
    beerService.removeBeer(index);
  }
  $scope.ratings = [0,1,2,3,4,5];
  $scope.sort = beerService.sort;
})
app.factory('beerService',function(){
  var beers=[];

  var addBeer = function(newBeer){
    var beer = {
      name:newBeer.name,
      style:newBeer.style,
      abv:newBeer.abv,
      image:newBeer.image,
      rating:newBeer.rating
    };
    beers.push(beer);
  }
  var removeBeer = function(index){
    beers.splice(index,1);
  }

  return {
    beers:beers,
    addBeer:addBeer,
    removeBeer:removeBeer
  };
});
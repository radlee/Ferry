module.exports = function(numberOfCars, numberOfPeople){
  var people_count = 0;
  var car_count =0;
  var board = function(numberOfCars, numberOfPeople) {
    this.numberOfCars = numberOfCars;
    this.numberOfPeople = numberOfPeople;
    people_count += numberOfPeople;
    car_count += numberOfCars;
  }
  return "";
}

var Car = require("./Car");
module.exports = function(x){
  var load1 = []
  var people_count = 0;
  var car_count =0;
  if(x.numberOfPassengers > people_count){
    people_count += x.numberOfPassengers;
    car_count ++;
  }
  var result = {
    numberOfPeople : people_count,
    numberOfCars : car_count
  }
  return result;
}

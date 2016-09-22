var assert = require("assert");
var Car = require("../Car");
var Ferry = require("../Ferry");

var car1 = new Car('Blue', 4);
var load1 = new Ferry(car1);

describe("Should Say wheather Ferry will Accept or Reject loads", function(){
  it("should return  a Blue car with 3 Passenges", function(){
    assert.deepEqual(car1, { color: 'Blue', numberOfPassengers: 4 });
  });

  it("should return current Number of Cars and People in the Ferry", function(){
    assert.deepEqual(load1, { numberOfPeople: 4, numberOfCars: 1 });

  });
});

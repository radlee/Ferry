module.exports = function(color, numberOfPassengers){
  var counter = 0;
  this.color = color;
  this.numberOfPassengers = numberOfPassengers;
  this.getInfo = function(){
    return this.numberOfPassengers;
  };
}

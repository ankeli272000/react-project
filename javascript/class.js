class Car {
  constructor(name) {
    this.brand = name;
  }
}

//classwork
class School {
  constructor(institution, primary, secondary) {
    this.school = institution; 
    this.basic = primary;
    this.sec = secondary;
    
  }
}

let uni = new School("BSU", "lea", "gsss")
console.log(uni)



let car1 = new Car("Honda")
console.log(car1)


module.exports = { Car, School };
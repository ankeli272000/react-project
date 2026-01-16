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

//assignment







let uni = new School("BSU".toLowerCase(), "lea".toUpperCase(), ["gss"])
console.log(uni)


let car1 = new Car("Honda")
console.log(car1)


module.exports = { Car, School };
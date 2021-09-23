// Write a “person” class to hold all the details.


class Person {
    constructor(name, age, place, number){
        this.name= name;
        this.age= age;
        this.place= place;
        this.number= number;

    }
}
const vicky = new Person("vicky", 26, "chennai", 124567890);
const sara = new Person("sara", 26, "madurai", 124567891);
const maya = new Person("maya", 26, "theni", 124567892);
console.log(vicky);
console.log(sara);
console.log(maya);


// write a class to calculate uber price.

class Uber{
    constructor(cartype, seater, price){
        this.cartype = cartype;
        this.seater = seater;
        this.price= price;
    }
}
 const sedan = new Uber ("sedan", 4, 200);
 const suv = new Uber ("suv", 5, 250);
 const hatchbag = new Uber ("hatchbag", 4, 190);
 console.log(sedan);
 console.log(suv);
 console.log(hatchbag);
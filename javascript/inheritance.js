const Person = require("./classes");

//require("./classes");

class Pet extends Person{
    //constructor of parent should be implemented here
    constructor(firstName,lastName){
        //call parent class constructor here - mandatory step 1
        super(firstName,lastName)
    }

    get location(){  //if we comment this when we call pet.location it will call super class location method.
        return "Blue Cross"
    }
}

let pet=new Pet("sam","puppy")
console.log(pet.fullName());
console.log(pet.location);





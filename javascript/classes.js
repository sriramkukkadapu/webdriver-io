module.exports = class Person{

    age=25
    firstName=""
    lastName=""
    get location(){
        return "Cananda";
    }

    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    fullName(){
        return this.firstName + " " +this.lastName;
    }


}

// let person =new Person("Sriram", "Kukkadapu");
// let person2 =new Person("Thripura", "Kukkadapu");
// console.log(person.age);
// console.log(person.location);
// console.log(person);
// console.log(person.fullName());
// console.log(person2.fullName());


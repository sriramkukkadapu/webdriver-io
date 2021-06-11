let person ={
    "firstName" : "Sriram",
    "lastName" : "Kukkadapu",
    "age": 24,
    fullName: function(){
        return this.firstName+" "+this.lastName
    }
}

console.log(person.firstName)
console.log(person['firstName'])

person.firstName="Thripura";
console.log(person['firstName'])

person.gender="Female";
console.log(person);

delete person.gender;
console.log(person);

console.log('gender' in person);

//print values of all properties
for(let key in person){
    console.log(person[key])
}

console.log(person.fullName())
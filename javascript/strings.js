const Person=require('./classes')

let day= 'tuesday '
console.log(day.length)
let subDay=day.slice(0,3)
console.log(subDay)
console.log(day[1])

//we need  tue and day separately so we want to di split based on character s
console.log(day.split('s')[0])
console.log(day.split('s')[1].trim())
console.log(day.split('s')[1].trim().length)


let date= '23'
let newDate= '27'
let diff= parseInt(newDate)-parseInt(date);
console.log(diff)
console.log(typeof(diff))
console.log(typeof(diff.toString()))


let newQuote=day+ "is Funday"
console.log(newQuote)
let val=newQuote.indexOf("day",5)
console.log(val)


//how many times day occured in aboe string - find occurances of a substring in given string
let value=newQuote.indexOf("day")+"  day" 
let count=0;
while(value!=-1){
    count++;
    value=newQuote.indexOf("day",value+1) //repeat search from next index
}
console.log(count);

let person=new Person("Sriram","Kukkadapu")
console.log(person.fullName());

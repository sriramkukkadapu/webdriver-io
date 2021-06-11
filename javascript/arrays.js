//let marks=Array(6)
//var marks = new Array(20,40,50,60,37,100)
var marks=[20,40,50,60,37,100]
console.log(marks[0])
marks[2]=90
console.log(marks)
console.log(marks.length)

marks.push(65) //add ele at last
console.log(marks)
marks.pop() // remove last ele
console.log(marks)

marks.unshift(-1) //add ele at starting of array
console.log(marks)

console.log(marks.indexOf(100))

console.log(marks.includes(120))

subMarks=marks.slice(2,5)
console.log(subMarks);

console.log("\n=========Displaying Array elements==========");
var sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
    console.log(marks[i]);
}

console.log("Total: "+sum);

//===============Redcue example================
let total = marks.reduce((sum,mark) => sum+mark,0)  //redcue(accumulator) sum is accumulator, initialize value 0 for sum
console.log(total);


//===============Filter example================

var scores=[10,20,14,16,13,19,-20,9,27]
var evenScores=[]
for(let i=0;i<scores.length;i++){
    if(scores[i]%2==0)
        evenScores.push(scores[i]);
}

console.log(evenScores)

let filteredScores=scores.filter(score => score%2!=0)  //array.filter(anyvariable => condition to consider)
console.log(filteredScores)

//===============Map function===============
let mappedArray = filteredScores.map(score => score*3)     //every element maps to a new value and sent.
console.log(mappedArray)
console.log(mappedArray.reduce((sum,total)=>sum+total,0))


//===============Array Sorting===============
let fruits=["Banana", "Mango", "Apple", "Grapes", "Guava"]
console.log(fruits.sort())

var scores1=[10,20,-1,90,003]
console.log(scores1.sort()) //wont work because of 003 
console.log(scores1.sort(function (a,b){ return (a-b)
}
))
console.log(scores1.reverse())




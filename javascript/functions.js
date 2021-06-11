// DEclaration type 1
function add(a,b){
    return a+b
}

let sum=add(2,3)
console.log(sum);

// DEclaration type 2
let sumOfIntegers = function(a,b){
    return a+b;
}


// DEclaration type 3
let sumOfNumbers = (a,b) => a+b;  //javascript converts fat pipe to function.
console.log(sumOfNumbers(2,3));



//create a fuction that checks if the parameter/input is an even number
function checkForEven (start, end) {
for (let f = start; f <=end; f++) {
  if (f % 2 === 0) {
    console.log(f + 'is even number')
  } else {
    console.log(f + 'is odd number')
  }
}
  
}  
checkForEven(1, 20)


//Create a function that prints to the console n2 - n2, where n1 is the first input/parameter and n2 is the second input/parameter
functionprintNum (n1, n2) {
  for (let num = n1; num <= n2; num++) {
    console.log(num);
  }
}
printNum(16, 20);


//Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3
function sumVal(n1, n2) {
  let sum = 0;
  for (let f = n1; f <= n2; f++) {
  sum += f; //sum = sum + f
}
return sum;
}
let n1 = 2
let n2 = 10
let total = sumVal(2, 10)
console.log('The sum between ${n1} and ${n2} is ${totalNum}')
  




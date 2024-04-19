//Arrow function

// simple function
function sum(a,b){
    return a+b;
}
console.log(sum(20,10)); //30

//Arrow function
const sum2 = (a,b)=>{
    return a+b;
}
const sum3  = (a,b)=> a+b;
const res = sum3(10,20);
console.log(res);

function calculate(a,b, operation){
    return operation(a,b)
};
function subtract(a,b){
    return a-b
}
calculate(9,3, subtract); //6
calculate(9,3,(a,b)=>a/b); //3

console.log(calculate(9,3, subtract)); //6
console.log(calculate(9,3,(a,b)=>a/b)); //3

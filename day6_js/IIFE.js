// immediate invoke function expression = IIFE 
let a=Math.floor(Math.random()*10);
let b=Math.floor(Math.random()*10);
console.log(a);
console.log(b);
(function (num1,num2){
    console.log('sum =',(num1+num2));
})(a,b);
//push an element into array
let data=[1,2,3,4]
data.push(5);

console.log(data);
//array------methods

//multiply each item with 10
data.map(item=>console.log(`${item*10}`));

//find sum of array elememts
let array_sum=data.reduce((a,b)=>a+b);
console.log("array sum =",array_sum);

//find product of array elements
let array_mul=data.reduce((a,b)=>a*b);
console.log("array mul =",array_mul);

//find odd array element
let oddnum=data.filter(item=>(item%2!==0))
console.log(oddnum);

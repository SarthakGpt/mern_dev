//------ spread ---------
let sum=(num1=0,num2=0,num3=0)=>{
    console.log("sum of numbers =",(num1+num2+num3));
}
let data=[12,23,4,5,67];
sum(...data);
sum();
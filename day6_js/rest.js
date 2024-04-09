//  convert parameters into array
const mul=(num1=1,num2=1,...numbers)=>{
    let result=1;
    if(numbers.length>0)
    {
        result=numbers.reduce((a,b)=>a*b);
    }
    console.log("product =",(num1*num2*result));
}
mul(5,2,2,2,3,2,3,2);
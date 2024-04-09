//high_order fun & call back fn
let sum=(num1,num2,print)=>
{
    let s=(num1+num2);
    print(s);
}
sum(20,30,(sum)=>{
    if(sum>0)
    {
        console.log('grater than 20');
    }
    else{
        
        console.log('less than 20');
    }
});

//sum => high_order function
//in the parametet as reference= print =>callback function
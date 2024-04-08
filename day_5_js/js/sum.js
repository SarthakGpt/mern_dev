const sumbtn=document.getElementById("sum");
// sumbtn.addEventListener("click",()=>{
    //     const oldData=document.getElementById("result").innerHTML;
    //     document.getElementById("result").innerHTML=oldData+(2+2);
    // })
    
sumbtn.addEventListener("click",()=>{
    let num1=prompt("enter num 1","0");
    let num2=prompt("enter num 2","0");
    let result=`Sum Of (${num1} + ${num2}) is = ${parseInt(num1)+parseInt(num2)}`;
    document.getElementById("result").innerHTML=result;
});

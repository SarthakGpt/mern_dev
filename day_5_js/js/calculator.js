let result=document.getElementById('display');
function clearresult(){
    result.value='';
}
const printnum=(value)=>
{
    result.value+=value;
}
const tocalculate=()=>{
    result.value=eval(result.value);
}
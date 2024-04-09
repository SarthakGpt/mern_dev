//  use of promise
// let age=12;
let age=19;
const data=new Promise((resolve,reject)=>{
if(age>18)
{  resolve('you can vote'); }
else{ reject('you can not vote'); }
})

data.then(result=>console.log(result))
    .catch(err=>console.log(err))

// use of async_await

const res_info = async()=>{
    try{
        let result=await data;
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

res_info();
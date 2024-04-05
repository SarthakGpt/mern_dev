// function
const msg=()=>console.log("hello");

//------ array ---------
let data=[10,20.5,"sam",msg];

//array traversal--M1
for (let i = 0; i < data.length; i++) {
    console.log(`at ${i} = ${data[i]}`); 
}

//array traversal--M2
for(let i in data){
    console.log(`at ${i} = ${data[i]}`); 
}

//array traversal--M3
for(let i of data){
    console.log(`at ${i}`); 
}

//array traversal--M4
data.forEach(i=>console.log(`at ${i}`));

//--- destructuring_ array

let data=[11,12,13,14,15,16];

let [x,y,z,p,q,r]=data;
console.log(x,y,z,p,q,r);

//--- de_structuring _objects..

let clientdata={
    id:"cl_11",
    sname:"sam",
    package:"1cr",
    address:"ghaziabad"
}

// method-1
let {id,sname,package,address}=clientdata;
console.log(id,sname,package,address);
// method-2
let {id:cl_id,sname:cl_name,package:cl_pckg,address:cl_add}=clientdata;
console.log(cl_id,cl_name,cl_pckg,cl_add);
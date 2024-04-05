//--- objects ---------
let client_info={
    id:1101,
    name:"sam",
    company:"TCS",
    data:[1,2,3,4,5],
    msg:()=>console.log("have a wonderful day")
}
// display objects
console.log(client_info);

//display objects Particular value => key
console.log(client_info.id);
console.log(client_info.name);
console.log(client_info.company);
console.log(client_info.data);
console.log(client_info.msg());

//display array elements using foreach
client_info.data.forEach(item=>console.log(`${item}`));
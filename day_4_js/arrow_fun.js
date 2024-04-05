//arrow function single line
const greet=()=>console.log("welcome to arrow function");
greet();

const name=()=>{return "sam";}
console.log("name =",name(2,3));

const sum=(n1,n2)=>{
    console.log("sum =",(n1+n2));
}
sum(1,2);

const mul=(n1,n2)=>{return (n1*n2);}
console.log("mul =",mul(2,3));


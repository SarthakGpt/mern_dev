// const tableID = document.getElementById("table");
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then(data=>{
//     console.log(data);
//     let displayInfo = "<table border='1'>";
//     displayInfo+="<tr>";
//     displayInfo+="<th>ID</th><th>Titke</th><th>Price</th>";
//     displayInfo+="</tr>";
//     // for (product of data){
//                     displayInfo+="<tr>";
//                     displayInfo+=`<td>${data.userId}</td><td>${data.title}</td><td>${data.completed}</td>`;
//                     displayInfo+="</tr>";
//                 // }

//     displayInfo+="</table>";
// }).catch(err=>console.log(err));
const tableID = document.getElementById("table");
const fetchdata=async ()=>
{
    const dataJSON=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data=await dataJSON.json();
    let displayInfo = "<table border='1'>";
    displayInfo+="<tr>";
    displayInfo+="<th>ID</th><th>Title</th><th>Status</th>";
    displayInfo+="</tr>";
    // for(person of data)
    // {
        displayInfo+="<tr>";
        displayInfo+=`<td>${data.id}</td><td>${data.title}</td><td>${data.completed}</td>`;
        displayInfo+="</tr>";
    // }

    displayInfo+="</table>";
    tableID.innerHTML=displayInfo;

}
fetchdata();

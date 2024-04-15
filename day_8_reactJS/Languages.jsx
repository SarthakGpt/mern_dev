import React from 'react'

const Languages = () => {
    const lang=[
      {id:1,name:"java"},
      {id:2,name:"javascript"},
      {id:3,name:"kotlin"},
      {id:4,name:"python"},
      {id:5,name:"c"},
    ];
    var check=true;
  return (
    <div>
        <h1 className={(check===true)?'bg-warning':'bg-success text-white'}>{check?'Best Programming Languages Known':'Top Programming Languages'}</h1>
        <ul>
            {lang.map((item)=>(
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Languages
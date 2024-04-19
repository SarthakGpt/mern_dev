import React from 'react'

const Languages = () => {
    // const lang=["Kotlin","Java","JavaScript","C","C++"]
    const lang=[
      {id:1,name:"java"},
      {id:2,name:"javascript"},
      {id:3,name:"kotlin"},
      {id:4,name:"python"},
      {id:5,name:"c"},
    ];
    var check=true;
    // var check=false;
  return (
    <div>
      {/* conditional css class rendering   */}
        {/* <h1 className={check?'bg-warning':'bg-success text-white'}>Programming Languages known</h1> */}
      {/* expressional css class rendering   */}
        <h1 className={(check===true)?'bg-primary text-white':'bg-success text-white'}>{check?'Best Programming Languages Known':'Top Programming Languages'}</h1>
        <ul>
            {lang.map((item)=>(
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Languages
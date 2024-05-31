import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    const[name,setName]=useState("MCA");
    const[course,setCourse]=useState("B.TECH");
    const changeName=()=>{
        setName("KIET MCA")
    };
    const changeCourse=()=>{
        setCourse("MCA")
    };
    useEffect(()=>{
        console.log("use effect hook");
    },[])
    useEffect(()=>{
        console.log(name);
    },[name])
  return (
    <div>
        <h1>
        Use Effect Ex
        </h1>
        <h1>
        Name :{name}
        </h1>
        <button className='btn btn-danger' onClick={changeName}>Refresh Name</button>
        <h1>
        Class :{course}
        </h1>
        <button className='btn btn-danger' onClick={changeCourse}>Refresh Course</button>

    </div>
  )
}

export default UseEffectEx
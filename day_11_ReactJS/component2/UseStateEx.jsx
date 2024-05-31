import React, { useState } from 'react'

const UseStateEx = () => {
    
    const [userInfo,setUserInfo]=useState({name :"KIET", class :"MCA"});
    const [counter,setCounter]=useState(0);
    const [count,setCount]=useState(0);
    const changeName =()=>{
        setUserInfo({ ...userInfo, name :"KIET MCA"});
        console.log(userInfo.name);
    };
  return (
    <div>
    <h1>Name :{userInfo.name}</h1>
    <h1>Class :{userInfo.class}</h1>
    <button className='btn btn-primary' onClick={changeName}>
        Change Info
    </button>
    <h1>{counter}</h1>
    <button className='btn btn-primary' 
    onClick={()=>{
        // setCounter(counter+1);
        setCounter((prevCounter)=> prevCounter+1);
        setCounter((prevCounter)=> prevCounter+1);
        setCounter((prevCounter)=> prevCounter+1);
    }}>
        Increment Counter+3</button>
    <h1>{count}</h1>
    <button className='btn btn-primary' 
    onClick={()=>{
        setCount(count+1);}}>
        Increment Counter</button>

    </div>
  )
}

export default UseStateEx
import {useEffect,useState} from 'react'

const Counter1 = () => {
    const [count,setCount]=useState(0);
    const checkValue=()=>{
        return count===0?"Zero":count;
    }
    const checkCounter=()=>{
        return count===0?"badge bg-danger m-3 p-3 rounded text-white":"badge bg-warning m-3 p-3 rounded text-dark";
    }
    const decrement=()=>{
        if(count>0)
        {
        setCount(count-1);
        }
        // count--;
    }
    const increment=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        console.log(count);
    },[count])
    // let count = 0;
  return (
    <div className='container mt-3'>
      <button className='btn btn-primary' onClick={decrement}>Derement</button>
        {/* <span className='mx-3 my-3'> {count} </span> */}
        <span className={checkCounter()}> {checkValue()} </span>
      <button className='btn btn-primary' onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter1
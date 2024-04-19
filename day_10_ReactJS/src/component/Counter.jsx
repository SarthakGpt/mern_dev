
const Counter = (props) => {
  const {counter,decrement,increment,deleteCounter}=props;

    const checkValue=()=>{
        return counter.count===0?"Zero":counter.count;
    }
    const checkCounter=()=>{
        return counter.count===0?"badge bg-danger m-3 p-3 rounded text-white":"badge bg-warning m-3 p-3 rounded text-dark";
    }
   

  return (
    <div className='container mt-3'>
      <button className='btn btn-primary' onClick={()=>decrement(counter)}>Derement</button>
        {/* <span className='mx-3 my-3'> {count} </span> */}
        <span className={checkCounter()}> {checkValue()} </span>
      <button className='btn btn-primary' onClick={()=>increment(counter)}>Increment</button>
      <button className='btn btn-danger mx-3' onClick={()=>deleteCounter(counter)}>Delete</button>
    </div>
  )
}

export default Counter
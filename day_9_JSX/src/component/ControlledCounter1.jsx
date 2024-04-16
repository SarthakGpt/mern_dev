// import React from 'react'
import Counter1 from './Counter1'


const ControlledCounter1 = () => {
  return (
    <div className='container m-2'>
        <button className='btn btn-danger mt-3 rounded p-3 text-white' >RESET</button>
        <Counter1 />
        <Counter1 />

    </div>
  )
}

export default ControlledCounter1
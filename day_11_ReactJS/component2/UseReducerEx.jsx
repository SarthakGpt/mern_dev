import React, { useReducer } from 'react'

const UseReducerEx = () => {
    const initstate={color:"#000000",size:"30px"};
    const reducer=(state,action)=>{
switch (action) {
    case "red": return {...state,color:"#ff0000"};
    case "green": return {...state,color:"#00ff00"};
    case "blue": return {...state,color:"#0000ff"};
    case "50px": return {...state,size:"50px"};
    default: return state;
} };
    const[state,dispach]=useReducer(reducer,initstate);
  return (
    <div>
        <h1>
        UseReducerEx
        </h1>
        <h2 style={{color:state.color,fontSize:state.size}}>MCA React Classes</h2>
        <button  className='btn btn-primary m-2' onClick={()=> dispach("red")}> Red</button>
        <button  className='btn btn-primary m-2' onClick={()=> dispach("green")}>Green</button>
        <button  className='btn btn-primary m-2' onClick={()=> dispach("blue")}>Blue</button>
        <button  className='btn btn-primary m-2' onClick={()=> dispach("50px")}>50px</button>

    </div>
  )
}

export default UseReducerEx
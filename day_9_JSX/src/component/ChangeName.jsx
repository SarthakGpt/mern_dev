import { useState } from 'react'

const ChangeName = (props) => {
    // const [name,setName] = useState("KIET");
    // let {sname}=props;
    // const [name,setName] = useState(sname);
    let {name,onUpdate} = props;
  return (
    <div className='container mt-3'>
         <div>
         {name}
         </div>
        {/* <button className='btn btn-warning' onClick={()=> setName("JavaScript")}>Change Name</button> */}
        <button className='btn btn-warning' onClick={onUpdate}>Change Name</button>
    </div>
  )
}

export default ChangeName
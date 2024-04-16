import ChangeName from "./ChangeName"
import { useState } from "react";

const ControlledName = () => {
    const [name,setName] = useState("KIET");
    const [sname,setSName] = useState("MCA");
  return (
    <div>
         <ChangeName name={name} onUpdate={()=>setName("KIET MCA")} />
         <ChangeName name={sname} onUpdate={()=>setSName("MCA KIET")} />
    </div>
  )
}

export default ControlledName
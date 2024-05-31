import React, { useContext } from 'react'
import { nameContext } from "./UseContextEx";

const C = () => {
    const name=useContext(nameContext)
  return (
    <div>
        <h2>C comp</h2>
        <h2>Name:{name}</h2>
    </div>
  )
}

export default C
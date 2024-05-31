import React from 'react'
import A from "./A"
export const nameContext = React.createContext();

const UseContextEx = () => {
  return (
    <div>
        <h1>
        UseContextEx
        </h1>
        <nameContext.Provider value="KIET">
        <A />
        </nameContext.Provider>

        </div>
  )
}

export default UseContextEx
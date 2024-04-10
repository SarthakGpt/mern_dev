import React from 'react'

const Languages = () => {
    const lang=["Kotlin","Java","JavaScript","C","C++"]
  return (
    <div>
        <h1>Programming Languages known</h1>
        <ul>
            {lang.map((item,index)=>(
            <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Languages
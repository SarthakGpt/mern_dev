import React from 'react'

const Card = (props) => {
  const {id,title ,description, price,brand,category,thumbnail}=props;
  return (
    <div className='mx-3 my-3'>
       <div className="card m-2" style={{width: "18rem",height:"27rem"}}>
        <img src={thumbnail} className="card-img-top" height={"150px"} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text overflow-hidden">{description}</p>
          <div className='d-flex flex-row justify-content-center'>
            <div>Price : Rs.{price}</div>
            <div>Brand : {brand}</div>
            <div>Category : {category}</div>
          </div>
       </div>
     </div>
   </div>

)
}
export default Card

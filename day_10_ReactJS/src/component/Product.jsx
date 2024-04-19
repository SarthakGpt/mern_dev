import { NavLink,Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div className="container">
        <h2>Product main Page</h2>
        <div className="d-flex flex-row">
            <NavLink to="product1" className="p-2" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"none"}:{color:"red",fontWeight:"bold"})}>Product 1</NavLink>
            <NavLink to="product2" className="p-2" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"none"}:{color:"red",fontWeight:"bold"})}>Product 2</NavLink>
            <NavLink to="product3" className="p-2" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"none"}:{color:"red",fontWeight:"bold"})}>Product 3</NavLink>
        </div>
        <button className="mx-2 btn btn-outline-info text-dark fw-bold">
          <Outlet />
        </button>
    </div>
  )
}

export default Product
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-primary fw-bold" to="/">KIET MCA</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link fw-bold" aria-current="page" to="/" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"underline"}:{color:"black"})}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold " to="/lang" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"underline"}:{color:"black"})}>Languages</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold " to="/counter" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"underline"}:{color:"black"})}>Counter</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold " to="/card" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"underline"}:{color:"black"})}>Mycard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold " to="/student" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"underline"}:{color:"black"})}>Student</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold " to="/product" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"underline"}:{color:"black"})}>Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold " to="/about" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold",textDecoration:"underline"}:{color:"black"})}>About Us</NavLink>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Navbar
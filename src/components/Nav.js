import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li><div className="company">
        <NavLink exact={true} to="/">
        <div className="circle">
        </div>
        <div className="company-name">
          Anywhere App
        </div>
          </NavLink>
     
      </div>
      
        </li>
      
        
        <li><NavLink exact={true} to="/" className="navlink">Home</NavLink></li>
          
        
        
        <li><NavLink to="/join" className="navlink">Join</NavLink></li>
          
        
        
        <li><NavLink to="/login" className="navlink">Login</NavLink></li>
          
      </ul>
      </nav>
  )
}

export default Nav
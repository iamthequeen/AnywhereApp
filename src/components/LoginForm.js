import { useState } from "react"
import { useNavigate } from "react-router-dom"
function LoginForm({existingUser}) {
    const navigate = useNavigate();
  
    const [loginDetails, setLoginDetails] = useState({email: "", password: ""})
    
    function handleLoginChange(e) {
      setLoginDetails(prevLoginDetails =>  ({
         ...prevLoginDetails,
             [e.target.name]: e.target.value
              }))
    }
    
    function submitHandler() {
  if (existingUser.email !== loginDetails.email || existingUser.password !== loginDetails.password) {
    console.log("Details don't match!")
  } else {
      navigate("/welcomeBack")
    }
    }
    
    function handleKeyPress(e) {
      if (e.key === 'Enter') {
        
  if (existingUser.email !== loginDetails.email || existingUser.password !== loginDetails.password) {
    console.log("Details don't match!")
  } else {
    navigate("/welcomeBack")
    }
    }
    }
  
    return (
    <form className="login-form"
      >
             
        
        <div className="form-inputs">
        <label
          htmlFor="login-email"
          className="form-label"
          >Email</label>
        <input 
          id="login-email"
          type="email"
          name="email"
          className="form-input"
          onChange={handleLoginChange}
          value={loginDetails.email}
          />
        </div>
        
        <div className="form-inputs">
        <label
          htmlFor="login-password"
          className="form-label"
          >Password</label>
        <input 
          id="login-password"
          type="password"
          name="password"
          className="form-input"
          onChange={handleLoginChange}
          value={loginDetails.password}
          onKeyPress={handleKeyPress}
          />
        </div>
    
        <div className="form-inputs">
        <button type="submit" id="login-btn"
          onClick={submitHandler}
          >Login</button>
        </div>
        
        </form>
    )
}

export default LoginForm
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoginValidation from "./LoginValidation";


function LoginForm({existingUser}) {
    const navigate = useNavigate();
  
    const [loginDetails, setLoginDetails] = useState({email: "", password: ""})
    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    function handleLoginChange(e) {
      setLoginDetails(prevLoginDetails =>  ({
         ...prevLoginDetails,
             [e.target.name]: e.target.value
              }))
    }
    
    function submitHandler(e) {
  // if (existingUser.email !== loginDetails.email || existingUser.password !== loginDetails.password) {
  //   console.log("Details don't match!")
  // } else {
  //     navigate("/welcomeBack")
  //   }

  e.preventDefault()
  setErrors(LoginValidation(existingUser, loginDetails))
  setDataIsCorrect(true)
    }
    
    function handleKeyPress(e) {
      if (e.key === 'Enter') {
      e.preventDefault()
  setErrors(LoginValidation(existingUser, loginDetails))
  setDataIsCorrect(true)
      }
  //     if (e.key === 'Enter') {
        
  // if (existingUser.email !== loginDetails.email || existingUser.password !== loginDetails.password) {
  //   console.log("Details don't match!")
  // } else {
  //   navigate("/welcomeBack")
  //   }
    }
    
    useEffect(() => {
      if(Object.keys(errors).length === 0 && dataIsCorrect) {
        navigate("/welcomeBack")
        console.log(existingUser)
      }
     })
     
  
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
         {errors.email && <p className="error">{errors.email}</p>}

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
         {errors.password && <p className="error">{errors.password}</p>}

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
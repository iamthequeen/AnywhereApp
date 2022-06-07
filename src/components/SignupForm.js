import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import SignupValidation from "./SignupValidation";
function SignupForm({user, setUser, existingUser, setExistingUser}) {
    const navigate = useNavigate();
  
    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    function handleSignupChange(e) {
     setUser(prevUser =>  ({
        ...prevUser,
            [e.target.name]: e.target.value
             }))
      
      setExistingUser((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
   }
   
   function submitHandler(e) {
     e.preventDefault()
     setErrors(SignupValidation(user))
     setDataIsCorrect(true)

   }


   
   function handleKeyPress(e) {
     if (e.key === 'Enter') {
      e.preventDefault()
      setErrors(SignupValidation(user))
      setDataIsCorrect(true)
   }
   }

   useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect) {
      navigate("/welcome")
      console.log(existingUser)
    }
   })
   
   return (
   <form className="signup-form">
       
       <div className="names">
       <div className="form-inputs">
       <label
         htmlFor="fname"
         className="form-label name-label"
         >First Name</label>
       <input 
         id="fname"
         type="text"
         name="firstName"
         className="form-input"
         onChange={handleSignupChange}
         value={user.firstName}
         />
         {errors.firstName && <p className="error">{errors.firstName}</p>}
       </div>
       
       <div className="form-inputs">
       <label
         htmlFor="lname"
         className="form-label name-label"
         >Last Name</label>
       <input 
         id="lname"
         type="text"
         name="lastName"
         className="form-input"
         onChange={handleSignupChange}
         value={user.lastName}
         />
         {errors.lastName && <p className="error">{errors.lastName}</p>}
       </div>
         </div>
       
       <div className="form-inputs">
       <label
         htmlFor="signup-email"
         className="form-label"
         >Email</label>
       <input 
         id="signup-email"
         type="email"
         name="email"
         className="form-input"
         onChange={handleSignupChange}
         value={user.email}
         />
         {errors.email && <p className="error">{errors.email}</p>}
       </div>
       
       <div className="form-inputs">
       <label
         htmlFor="signup-password"
         className="form-label"
         >Password</label>
       <input 
         id="signup-password"
         type="password"
         name="password"
         className="form-input"
         onChange={handleSignupChange}
         value={user.password}
         onKeyPress={handleKeyPress}
         />
         {errors.password && <p className="error">{errors.password}</p>}
       </div>
   
       <div className="form-inputs">
       <button 
         onClick={submitHandler} 
         id="signup-btn"> Create account</button>
       </div>
       
       </form>
   )
}

export default SignupForm
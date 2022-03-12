import { useNavigate } from "react-router-dom"

function SignupForm({user, setUser, existingUser, setExistingUser}) {
    const navigate = useNavigate();
  
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
   
   function submitHandler() {
     
     console.log(existingUser)
     
       
     navigate("/welcome")
 
   }
   
   function handleKeyPress(e) {
     if (e.key === 'Enter') {
 
     console.log(existingUser)
       
     navigate("/welcome")
 
   }
   }
 
   
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
import { Route, Routes } from "react-router-dom"
import { useState } from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import WelcomeBack from "./components/WelcomeBack";
import ErrorPage from "./components/ErrorPage";


function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  
  const [existingUser, setExistingUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  
  

    return (
      <div className="container">
        <div className="overlay"></div>
        <Nav />
       <Routes>
         
         <Route exact={true} path="/" element={<Home />}/>
          
         <Route path="/join" element={<Signup
             user={user}
              setUser={setUser}
             existingUser={existingUser}
             setExistingUser={setExistingUser}
             />} />
          
         
         <Route path="/login" element={<Login 
             user={user}
             existingUser={existingUser}
             />} />
           

         
         <Route exact={true} path="/welcome" element={<Welcome 
             user={user}
             />}/>
           
         
         <Route path="/welcomeback" element={<WelcomeBack 
             existingUser={existingUser}
             />}/>
                    
         <Route path="*" element={<ErrorPage />}/>

         </Routes>
      </div>
    );
}

export default App;

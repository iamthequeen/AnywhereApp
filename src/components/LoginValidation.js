
function LoginValidation(existingUser, loginDetails) {
    let errors = {}

    if(!loginDetails.email) {
        errors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(loginDetails.email)) {
        errors.email = "Email is invalid."
    }

    if(!loginDetails.password) {
        errors.password = "Password is required."
    }
    
    if(loginDetails.email === existingUser.email) {
        errors.email = "This account already exists."
    }


    if(loginDetails.password === existingUser.password) {
        errors.password = "Password is incorrect."
    }


    
    return errors
    }
    
    export default LoginValidation
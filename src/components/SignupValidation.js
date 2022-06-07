
function SignupValidation(user) {
let errors = {}

if(!user.firstName) {
    errors.firstName = "First name is required."
}

if(!user.lastName) {
    errors.lastName = "Last name is required."
}

if(!user.email) {
    errors.email = "Email is required."
} else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "Email is invalid."
}

if(!user.password) {
    errors.password = "Password is required."
} else if (user.password.length < 5) {
    errors.password = "Password must be more than 5 characters."
}


return errors
}

export default SignupValidation
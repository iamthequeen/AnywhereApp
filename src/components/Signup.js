import { Link } from "react-router-dom"
import SignupForm from "./SignupForm"

function Signup({user, setUser, existingUser, setExistingUser}) {
  return (
    <div>
  <section className="signup">
      <p className="start-free">Start for free</p>
      <h1>Create new account</h1>
      <p>
          <span className="gray-text">Already A Member?</span>
      <Link to="/login" className="transfer-link"> Login</Link>
      </p>
      </section>
    <SignupForm
      user={user}
      setUser={setUser}
      existingUser={existingUser}
      setExistingUser={setExistingUser}
      />
      </div>
  )
}

export default Signup
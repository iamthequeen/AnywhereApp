import LoginForm from "./LoginForm"
import { Link } from "react-router-dom"

function Login({existingUser, setExistingUser}) {
  return (
    <div>
  <section className="login">
      <h1>Login into account</h1>
      <p><span className="gray-text">Don't Have An Account? </span>
      <Link to="/join" className="transfer-link"> Sign up</Link></p>
      </section>
    <LoginForm
      existingUser = {existingUser}
      setExistingUser = {setExistingUser}
      />
      </div>
  )
}

export default Login
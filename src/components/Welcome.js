
function Welcome({user}) {
  return (
    <h2 className="welcome">
        Welcome, {user.firstName} {user.lastName}!
        </h2>
  )
}

export default Welcome

function WelcomeBack({existingUser}) {
  return (
    <h2 className="welcome-back">
        Welcome back, {existingUser.firstName} {existingUser.lastName}!
    </h2>
  )
}

export default WelcomeBack
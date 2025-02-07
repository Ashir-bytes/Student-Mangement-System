import Login from './components/login.jsx'
import { useEffect, useState } from 'react'
import User from './components/User.jsx'
import Sign from './components/sign.jsx'

function App() {
  
  const [usersignup, setUserSign] = useState(false)
  localStorage.setItem('SET_USER_SIGN', usersignup);

  const handleSignup = () => {
    // Add signup logic here
    console.log("signup called with user ", setUserSign(!usersignup));
}

  const [userLogin, setUserLogin] = useState(() => {
    // Initialize state from localStorage
    const storedLoginState = localStorage.getItem('SET_USER_LOGIN')
    return storedLoginState === 'true'
  })

  useEffect(() => {
    // Update localStorage whenever userLogin changes
    localStorage.setItem('SET_USER_LOGIN', userLogin)
    console.log("Updated login state:", userLogin)
  }, [userLogin])

  const handleLogout = () => {
    setUserLogin(false)
  }

  const handleLogin = () => {
    setUserLogin(true);
  };
  return (

    <>
      {/* <h1>Debug: usersignup = {userLogin.toString()}</h1> */}
      {/* <h1>Debug: usersignup = {usersignup.toString()}</h1> */}
      {/* {localStorage.getItem('SET_USER_SIGN') === 'true' && <Sign /> }  */}
      {userLogin ? localStorage.getItem('SET_USER_SIGN') === 'true' ? <Sign /> : <User handleLogout={handleLogout}  handleSignup= {handleSignup}/>  : <Login handleLogin={handleLogin} />}
    </>
  )
}

export default App
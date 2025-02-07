import '../App.css'
import { useState } from 'react'
// Code from:
function Sign() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [newuser, setnewUser] = useState([]);

    const handleusernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlesetpasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleconfirmedpasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }
    // Hadle Data form 
    // Work On Sign Up Form  
    // to Add Data 
    const handleSign = (e) => {
        e.preventDefault()
        if (username === "" || email === "" || password === "" || confirmpassword === "") {
            alert("Please fill all the fields")
        }
        if (password === confirmpassword) {
            if (password.length < 6) {
                alert("password must be greater than 6")
            }
            else {
                alert("Sign Up Success")
                console.log(Math.random() * Math.ceil(Math.random()))
                setConfirmPassword('')
                setPassword('')
                setUsername('')
                setEmail('')

                const newDataSign = [...newuser, {}];
                setnewUser(newDataSign);
                localStorage.setItem('SET_USER_SIGN_Data', JSON.stringify({ username, email, password, confirmpassword }))
                console.log(username, email, password, confirmpassword);
                localStorage.setItem('SET_USER_SIGN', false);

            }
        } else {
            alert("password does not match")
        }
    }
    return (
        <>
            <form>
                <div className="login">
                    <div className="flex">
                        <h1>Sign Up</h1>
                        <input type="text" placeholder="Username"
                            value={username}
                            onChange={handleusernameChange} />
                        <input type="email" placeholder="Email"
                            value={email}
                            onChange={handleEmailChange} />
                        <input type="password" placeholder="Password"
                            value={password}
                            onChange={handlesetpasswordChange} />
                        <input type="password" placeholder="Confirmed Password"
                            value={confirmpassword}
                            onChange={handleconfirmedpasswordChange} />
                        <button onClick={handleSign}>Sign Up</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Sign



import PropTypes from 'prop-types';

function Navbar({ setuserLogin , handleSignup}) {
   
    const handleLogout = () => {
        localStorage.setItem("SET_USER_LOGIN", 'false')
        setuserLogin(false)
    }
    
    return (
        <>
            
            <nav>
                <h1>Student Mangement </h1>
                <ul>
                    <li onClick={handleLogout}>Log Out</li>
                    <li onClick={handleSignup}>Sign up</li>
                </ul>
            </nav>


        </>
    )
}
Navbar.propTypes = {
    setuserLogin: PropTypes.func.isRequired,
    handleSignup: PropTypes.func.isRequired,
};

export default Navbar;
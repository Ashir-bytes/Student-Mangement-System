import Navbar from './Navbar'
import Manage from './Mangementsystem/Manage'
import PropTypes from 'prop-types'

function User({handleLogout, handleSignup}) {
    return (
        <>
            <Navbar  setuserLogin={(handleLogout)} handleSignup={(handleSignup)}/>
            <Manage />
        </>
    )
}
User.propTypes = {
    handleLogout: PropTypes.func.isRequired,
    handleSignup: PropTypes.func.isRequired,
}

export default User;
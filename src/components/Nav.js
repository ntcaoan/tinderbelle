import whitelogo from '../images/tinder_logo_white.png'
import colorLogo from '../images/color-logo-tinder.png'


const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        // because we click LOGIN so setIsSignUp=false
        setIsSignUp(false)
    }

    const authToken = false

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whitelogo}  alt="logo"/>
            </div>

            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
            >log in</button>}
        </nav>
    )
}
export default Nav

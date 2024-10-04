import whitelogo from '../images/tinder_logo_white.png'
import colorLogo from '../images/color-logo-tinder.png'


const Nav = ({ minimal, authToken }) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whitelogo} />
            </div>

            {!authToken && !minimal && <button className="nav-button">log in</button>}
        </nav>
    )
}
export default Nav
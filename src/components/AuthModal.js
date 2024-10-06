import {useState} from "react";


const AuthModal = ({setShowModal, isSignUp}) => {

    const [email, setEmail] = useState(null)
    const [password, setPwd] = useState(null)
    const [confirmPwd, setConfirmPwd] = useState(null)
    const [error, setError] = useState(null)

    console.log(email, password, confirmPwd)


    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
        //     post request in here
            if (isSignUp && (password !== confirmPwd))
            {
                setError('password need to match duh')
            }
            console.log('make a post request to our database')
        }
        catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>by clicking "log in", you agree to our term to steal your data and spread to the world</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="your super duper secure password"
                    required={true}
                    onChange={(e) => setPwd(e.target.value)}
                />

                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="just to make sure your pwd match"
                    required={true}
                    onChange={(e) => setConfirmPwd(e.target.value)}
                />}

                <input className="secondary-btn" type="submit"/>
                <p>{error}</p>

            </form>

            {/*hr is a line :0*/}
            <hr />

            <h2>GET THE APP</h2>


            Auth Modal
        </div>
    )
}
export default AuthModal

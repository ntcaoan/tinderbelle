const AuthModal = ({setShowModal}) => {

    const handleClick = () => {
        setShowModal(false)
    }
    return (
        <div className="auth-modal">
            <div onClick={handleClick}>xxx</div>
        </div>
    )
}
export default AuthModal

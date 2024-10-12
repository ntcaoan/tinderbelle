import {useState} from "react"; // save the state of the chat


const ChatInput = () => {

    const [textArea, setTextArea] = useState(null)

    return (
        <div className="chat-input">
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <button className="secondary-btn">submit</button>

        </div>
    )
}

export default ChatInput
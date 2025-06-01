import EmojiPicker, { Emoji } from "emoji-picker-react"
import { ToastContainer, toast } from "react-toastify"

export default function EmojiComponent() {
  return (
    <>
      <div className="emoji-app">
        <h1>Emoji Picker App</h1>
        {0 && <div className="aelected-emoji">
          <p>Selected Emoji:</p>
          <span>{0}</span>
        </div>}
        <div className="emoji-picker">
          <EmojiPicker onEmojiClick={0} />
        </div>
        <ToastContainer />
      </div>
    </>

  )
}

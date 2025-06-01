import EmojiPicker, { Emoji } from "emoji-picker-react"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

export default function EmojiComponent() {
  // STATE LOGIC
  const [choosenEmoji, setChoosenEmoji] = useState("");

  // HANDLERS
  const copyEmojiFn = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  const emojiPickerFn = (emojiObj) => {
    const emoji = emojiObj.emoji;
    setChoosenEmoji(emoji);
    copyEmojiFn(emoji);
    toast.success("Copied the emoji to clipboard", {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }

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

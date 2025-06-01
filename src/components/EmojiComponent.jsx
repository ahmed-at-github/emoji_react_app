import EmojiPicker from "emoji-picker-react"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "./style.css"

export default function EmojiComponent() {
  // STATE LOGIC
  const [choosenEmoji, setChoosenEmoji] = useState("");

  // HANDLERS
  const copyEmojiFn = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  // picks emoji & copies to clipboard
  const emojiPickerFn = (emojiObj) => {
    console.log(emojiObj);
    const emoji = emojiObj.emoji;
    setChoosenEmoji(emoji);
    copyEmojiFn(emoji);
    toast.success("Copied emoji to clipboard", {
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
      <div className="emoji-app" >
        <h1>Emoji Picker App</h1>
        {choosenEmoji && <div className="selected-emoji">
          <p>Selected Emoji: <span>{choosenEmoji}</span> </p>
        </div>}

        <div className="emoji-picker" style={{ display: "flex", justifyContent: "center" }}>
          <EmojiPicker onEmojiClick={emojiPickerFn} />
        </div>
        <ToastContainer />
      </div>
    </>

  )
}

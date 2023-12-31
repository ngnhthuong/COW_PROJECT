import userImg1 from "../../assets/images/player/user1.png";
import userImg2 from "../../assets/images/player/user2.png";
import userImg3 from "../../assets/images/player/user3.png";
import userImg4 from "../../assets/images/player/user4.png";
import userImg5 from "../../assets/images/player/user5.png";
import userImg6 from "../../assets/images/player/user6.png";
import userImg7 from "../../assets/images/player/user7.png";
import { useRef, useState, useEffect } from "react";

export default function ChatRoom({ playerAuth, socket, messages }) {
  const [message, setMessage] = useState("");
  const [defaultMessage, setDefaultMessage] = useState("");
  const handleInputChange = (event) => {
    setDefaultMessage(event.target.value);
    setMessage((pre) => {
      return {
        avatar: playerAuth.avatar,
        name: playerAuth.playerName,
        chat: event.target.value,
      };
    });
  };
  const handleEnterPress = (event) => {
    event.preventDefault();
    function isEmptyOrSpaces(str) {
      return str === null || str.match(/^ *$/) !== null;
    }
    // console.log(message);
    if (event.key === "Enter" && !event.shiftKey) {
      if (message.chat !== undefined && !isEmptyOrSpaces(message.chat)) {
        console.log("send chat here, ", message.chat);
        socket.emit("client-sendchat", message);
        setMessage("");
        setDefaultMessage("");
      }
    }
  };

  useEffect(() => {
    const chatList = document.querySelector(".room-chat__list");
    chatList.scrollTop = chatList.scrollHeight;
  }, [messages]);

  return (
    <>
      <div className="room-chat__title box--shadow">
        <label>CHAT</label>
      </div>
      <div className="room-chat">
        <ul className="room-chat__list">
          {messages.map((messages, index) => {
            return (
              <li key={index} className="room-chat__message box--shadow">
                <div className="room-chat__message--avatar box--shadow">
                  <img src={messages.avatar} alt="error" />
                </div>
                <p>
                  <label
                    className={`box--shadow ${
                      messages.name === playerAuth.playerName
                        ? "player__current"
                        : ""
                    }`}
                  >
                    {messages.name}
                  </label>
                  <> </>
                  {messages.chat}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="room-chat__send box--shadow">
        <input
          className="chat-textarea"
          type="text"
          value={defaultMessage}
          onChange={handleInputChange}
          onKeyUp={handleEnterPress}
          placeholder="Enter your message here!"
        ></input>
        <button>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </>
  );
}

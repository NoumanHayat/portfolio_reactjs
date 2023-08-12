import React, { useState } from "react";
import "./style.css"; // Import your CSS file if you have one

function ChatComponent() {
  const [chatLogs, setChatLogs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  const generateMessage = (msg, type) => {
    const newMessage = (
      <div key={chatLogs.length + 1} className={`chat-msg ${type}`}>
        {/* <span className="msg-avatar">
          <img
            src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745"
            alt="Avatar"
          />
        </span> */}
        <div className="cm-msg-text">{msg}</div>
      </div>
    );

    setChatLogs((prevLogs) => [...prevLogs, newMessage]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const msg = inputValue.trim();
    if (msg === "") {
      return;
    }

    generateMessage(msg, "self");

    const buttons = [
      { name: "Existing User", value: "existing" },
      { name: "New User", value: "new" },
    ];

    setTimeout(() => {
      generateMessage(msg, "user");
    }, 1000);

    setInputValue("");
  };

  const handleButtonClick = (event) => {
    const value = event.target.getAttribute("chat-value");
    const name = event.target.innerHTML;
    generateMessage(name, "self");
  };

  const toggleChatBox = () => {
    setIsChatBoxOpen((prevState) => !prevState);
  };

  return (
    <div className="chatBody">
      <div
        id="chat-circle"
        className="btn btn-raised"
        style={{ display: isChatBoxOpen ? "none" : "block" }}
        onClick={toggleChatBox}
      >
        <div id="chat-overlay"></div>
        <i class="bi bi-chat-square-dots-fill"></i>
      </div>
      <div
        className="chat-box"
        style={{ display: isChatBoxOpen ? "block" : "none" }}
      >
        <div className="chat-box-header">
          ChatBot
          <span className="chat-box-toggle" onClick={toggleChatBox}>
            <i class="bi bi bi-x-circle"></i>
          </span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs">{chatLogs}</div>
        </div>
        <div className="chat-input">
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              id="chat-input"
              placeholder="Send a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="chat-submit" id="chat-submit">
              <i className="material-icons">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;

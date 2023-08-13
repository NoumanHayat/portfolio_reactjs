import React, { useState } from "react";
import Message from "./Message";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div style={{backgroundColor:'blue',height:'100%'}}>
      {/* <div className="card shadow-lg"> */}
        <>
          <div className="card-body pt-sm-3 pt-0 overflow-auto" style={{}}>
            <div className="">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${
                    message.role == "user" ? "user" : "bot"
                  }`}
                  style={{
                    textAlign: ` ${message.role == "user" ? "start" : "end"}`,
                  }}
                >
                  {message.content}
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter text"
                  value={inputText}
                  onChange={(event) => {
                    setInputText(event.target.value);
                  }}
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      {/* </div> */}
    </div>
  );
};

export default Chatbox;

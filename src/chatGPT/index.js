import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import "./app.css";
import { Flex } from "@mantine/core";
import {handleSendMessageChat} from './../function/index'
const FixedPlugin = () => {
  const [chatLogs, setChatLogs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [chat, setChat] = useState(false);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

 
 

  const toggleChatBox = () => {
    setIsChatBoxOpen((prevState) => !prevState);
  };
  const LoginInfo = () => {
    return (
      <div className="card-body pt-sm-3 pt-0 d-flex align-items-center justify-content-center ">
        {/* Your card body content goes here */}
        <div className="card-body pt-sm-3 pt-0 overflow-auto">
          <div className="mb-3">
            <input
              type="Name"
              className="form-control form-control-lg"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email"
              aria-label="Email"
            />
          </div>

          <a
            className="btn bg-gradient-dark w-100"
            onClick={() => {
              setChat(!chat);
            }}
          >
            Continue
          </a>
        </div>
      </div>
    );
  };



  return (
    <div className="g-sidenav-show   bg-gray-100">
      <div className={`fixed-plugin ${isChatBoxOpen ? "show" : ""} `}>
        <a
          onClick={toggleChatBox}
          className={`fixed-plugin-button  text-dark position-fixed px-3 py-2 ${
            isChatBoxOpen ? "show" : ""
          }`}
        >
          <i style={{color:"black"}} className="fa fa-cog py-2"> </i>
        </a>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3 ">
            <div className="float-start">
              <h5 className="mt-3 mb-0">Chat GPT help</h5>
              <p>Tell me what you want to know</p>
            </div>
            <div onClick={toggleChatBox} className="float-end mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i style={{color:"black"}} className="fa fa-close"></i>
              </button>
            </div>
          </div>
          <hr className="horizontal dark my-1" />
          {/* Here i want to put code */}
          
            <>
              <div className="card-body pt-sm-3 pt-0 overflow-auto" style={{}}>
                <div className="">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`message ${message.role=='user' ? "user" : "bot"}`}
                      style={{ textAlign: ` ${message.role =='user' ? "start" : "end"}` }}
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
                      ref={inputRef}
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
                    <button
                      className="btn btn-primary"
                      onClick={async ()=>{const responce =await handleSendMessageChat(messages,inputText); setMessages(responce);setInputText('');}}
                    >
                      <i  className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </>
          
        </div>
      </div>
    </div>
  );
};

export default FixedPlugin;
{
  /* {chat ? <Chat /> : <LoginInfo />} */
}

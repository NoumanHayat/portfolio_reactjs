import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import "./app.css";
import { Flex } from "@mantine/core";
import io from "socket.io-client";

import { handleSendMessageChat } from "./../function/index";
const FixedPlugin = () => {
  const [chatLogs, setChatLogs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [chat, setChat] = useState(false);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [socket, setSocket] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const setRecieveMessage =(data) => {
    console.log((prevMessages) => [...prevMessages, { role: "bot", content: data.message }]);
    setMessages((prevMessages) => [...prevMessages, { role: "bot", content: data.message }]);
  };
  const connectSocket = () => {
    console.log("Connecting");
    const newSocket = io("http://192.168.43.106:5000/"); // Replace with your server URL

    newSocket.on("connect", () => {
      console.log("Socket connected");
      newSocket.emit("identify", { type: "user", name: name, email: email }); // Replace with your server URL
    });

    newSocket.on("sendMessage", (data) => {
      // console.log(data);
      setRecieveMessage(data);
      // setMessages((prevMessages) => [...prevMessages, { role: "bot", content: data }]);

      // newSocket.emit("sendMessage", {message: data});
      // Replace with your server URL

      // setReceivedMessages((prevMessages) => [...prevMessages, data]);
    });

    setSocket(newSocket);

    return () => {
      setChat(false);
      newSocket.disconnect();
    };
  };
  const messageSender = () => {
    if(inputText==''){
      alert('Please enter something!');
    }else{
    if (socket !== null) {
      socket.emit("sendMessage", { message: inputText });
      setMessages((prevMessages) => [...prevMessages, { role: "user", content: inputText }]);
    } else {
      alert("Not connected to server!");
    }
  }
  };

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
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email"
              aria-label="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <a
            className="btn bg-gradient-dark w-100"
            onClick={() => {
              setChat(!chat);
              connectSocket();
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
          <i style={{ color: "black" }} className="fa fa-cog py-2">
            {" "}
          </i>
        </a>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3 ">
            <div className="float-start">
              <h5 className="mt-3 mb-0">Custom Care</h5>
              <p>Lets Talk.</p>
            </div>
            <div onClick={toggleChatBox} className="float-end mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i style={{ color: "black" }} className="fa fa-close"></i>
              </button>
            </div>
          </div>
          <hr className="horizontal dark my-1" />
          {/* Here i want to put code */}
          {chat ? (
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
                        textAlign: ` ${
                          message.role == "user" ? "end" : "start"
                        }`,
                        color: ` ${
                          message.role == "user" ? "black" : "blue"
                        }`
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
                      onClick={async () => {
                        messageSender();
                        // const responce = await handleSendMessageChat(
                        //   messages,
                        //   inputText
                        // );
                        // setMessages(responce);
                        // setInputText("");
                      }}
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="card-body pt-sm-3 pt-0 d-flex align-items-center justify-content-center ">
              {/* Your card body content goes here */}
              <div className="card-body pt-sm-3 pt-0 overflow-auto">
                <div className="mb-3">
                  <input
                    type="Name"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>

                <a
                  className="btn bg-gradient-dark w-100"
                  onClick={() => {
                    setChat(!chat);
                    connectSocket();
                  }}
                >
                  Continue
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FixedPlugin;
{
  /* {chat ? <Chat /> : <LoginInfo />} */
}

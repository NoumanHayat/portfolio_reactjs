import React, { useEffect, useState } from "react";
import Modal from "./../../component/ModalChat/index";

import { handleSendMessageChat } from "./../../function/index";
import io from "socket.io-client";

function ConversationsScreen() {
  const [conversations, setConversations] = useState([
    {
      name: "Nouman Hayat",
      email: "noumanhayat35@gmail.com",
      socketid: "",
      conversation: [],

      // Add other properties as needed
    },
  ]);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    console.log("Connecting");
    const newSocket = io("http://192.168.43.106:5000/"); // Replace with your server URL

    newSocket.on("connect", () => {
      console.log("Socket connected");
      newSocket.emit("identify", { type: "admin" }); // Replace with your server URL
    });

    newSocket.on("users", (data) => {
      setConversations(data);
      console.log(data);
    });
    newSocket.on("sendMessage", (data) => {
      setConversations(prevData => {
        const updatedData = prevData.map(item => {
          if (item.id === data.to) {
            return {
              ...item,
              conversation: [...item.conversation, {role: "bot", content: data.data}]
            };
          }
          return item;
        });
        return updatedData;
      });
      alert("Sent message")
    })

    setSocket(newSocket);

    return () => {
      // setChat(false);
      newSocket.disconnect();
    };
  }, []);
  // const conversations = [
  //   {
  //     name: "Nouman Hayat",
  //     email: "noumanhayat35@gmail.com",
  //     socketid: "",
  //     message: [],

  //     // Add other properties as needed
  //   },
  // ];
  
  const [inputText, setInputText] = useState("Value v");
  const addMessage = (id, newMessage) => {
    setConversations(prevData => {
      const updatedData = prevData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            conversation: [...item.conversation, newMessage]
          };
        }
        return item;
      });
      return updatedData;
    });
    if(socket!==null){
      socket.emit('message',{to:id,content: newMessage});
    }else{
      alert("No socket found")
    }
    alert('Work');

  };
  const Card = ({ conversation }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
      <>
        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
          <div className="avatar me-3"></div>
          <div className="d-flex align-items-start flex-column justify-content-center">
            <h6 className="mb-0 text-sm">{conversation.name}</h6>
            <p className="mb-0 text-xs">{conversation.email}</p>
          </div>
          <a
            className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Reply
          </a>
        </li>
        <Modal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        >
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div
                      className="card-body pt-sm-3 pt-0 overflow-auto"
                      style={{}}
                    >
                      <div className="">
                        {conversation.conversation.map((message, index) => (
                          <div
                            key={index}
                            className={`message ${
                              message.role == "user" ? "user" : "bot"
                            }`}
                            style={{
                              textAlign: ` ${
                                message.role == "user" ? "end" : "start"
                              }`,
                            }}
                          >
                            {message.content}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-user">
                  <form >
                    <div className="card-body">
                    
                      <textarea
                        autoFocus="autoFocus"
                        rows="4"
                        cols="80"
                        className="form-control"
                        placeholder="Here can be your Message"
                        onChange={(e) => {
                          setInputText(e.target.value);
                        }}
                        value={inputText}
                      >
                        Lamborghini Mercy, Your chick she so thirsty, I'm in
                        that two seat Lambo.
                      </textarea>
                    </div>

                    <div className="button-container mr-auto ml-auto">
                      <button type="button" onClick={()=>{addMessage(conversation.id,{ role: "user", content: inputText },)}} className="btn bg-gradient-info ">
                        Send
                      </button>
                      
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12 col-xl-4">
          <div className="card h-100">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0">Conversations</h6>
            </div>
            <div className="card-body p-3">
              <ul className="list-group">
                {conversations.map((conversation, index) => (
                  <Card key={index} conversation={conversation} />
                  // {Card({key: index,conversation})}
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationsScreen;

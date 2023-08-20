import React, { useEffect, useState } from "react";
import Modal from "./../../component/ModalChat/index";

import { handleSendMessageChat } from "./../../function/index";
import io from "socket.io-client";
import Card from './Card';
import { Textarea } from '@mantine/core';
function ConversationsScreen() {
  const [conversations, setConversations] = useState([]);
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
      setConversations((prevData) => {
        const updatedData = prevData.map((item) => {
          if (item.id === data.to) {
            return {
              ...item,
              conversation: [
                ...item.conversation,
                { role: "bot", content: data.data },
              ],
            };
          }
          return item;
        });
        return updatedData;
      });
      // alert("Sent message")
    });
    newSocket.on("add", (data) => {
      addNewUser(data);
      // const updatedItems = [...conversations, data];
      // setConversations(updatedItems);
      // alert("Sent message")
    });
    newSocket.on("remove", (data) => {
      setConversations((prevData) => {
        const updatedData = prevData.filter((item) => {
          return item.id !== data.socketID;
        });
        return updatedData;
      });
    });
    setSocket(newSocket);

    return () => {
      // setChat(false);
      newSocket.disconnect();
    };
  }, []);
  const addMessage = (id, newMessage) => {
    setConversations((prevData) => {
      const updatedData = prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            conversation: [...item.conversation, newMessage],
          };
        }
        return item;
      });
      return updatedData;
    });
    if (socket !== null) {
      socket.emit("message", { to: id, content: newMessage });
    } else {
      alert("No socket found");
    }
    // alert("Work");
  };
  const addNewUser = (data) => {
    // const updatedItems = [...conversations, data];
    setConversations((prevMessages) => [...prevMessages, data]);
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
                  <Card key={index} conversation={conversation} addMessage={addMessage} />
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

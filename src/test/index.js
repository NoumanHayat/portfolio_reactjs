// import React, { useEffect } from 'react';
// import io from 'socket.io-client';
// import { Flex, Button, Image, Text } from '@mantine/core'

// function App() {
//   useEffect(() => {
//     const socket = io('http://localhost:5000'); // Replace with your server URL

//     // Handle socket events here
//     socket.on('connect', () => {
//       console.log('Connected to server');
//       socket.emit("test","Testing" /* … */);
//     });

//     // Clean up the socket connection when the component unmounts
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Socket.io Connection</h1>
//       <Button onClick={()=>{}}>send Message</Button>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/start')
//       .then(response => console.log(response))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>API Data:</h1>
//       <ul>

//       </ul>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const WebSocketComponent = () => {
//   const [socket, setSocket] = useState(null);
//   const [message, setMessage] = useState("");
//   const [receivedMessages, setReceivedMessages] = useState([]);

//   useEffect(() => {
//     const newSocket = io("http://192.168.43.106:5000"); // Replace with your server URL

//     newSocket.on("connect", () => {
//       console.log("Socket connected");
//     });

//     newSocket.on("sendMessage", (data) => {
//       console.log(data);
//       setReceivedMessages((prevMessages) => [...prevMessages, data]);
//     });

//     setSocket(newSocket);

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (socket) {
//       socket.emit("sendMessage", message);
//       console.log("send message");
//       setMessage("");
//     } else {
//       console.log("socket");
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => {
//             // console.log(e.target.value);
//             setMessage(e.target.value)}}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//       <div>
//         <h2>Received Messages:</h2>
//         <ul>
//           {receivedMessages.map((msg, index) => (
//             <li key={index}>{msg}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default WebSocketComponent;
import React, { useState } from "react";
import "./App.css";
// You can create this file to customize icons if needed

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      text: inputText,
      fromUser: true,
    };

    setMessages([...messages, newMessage]);
    const newMessage2 = {
      text: inputText,
      fromUser: false,
    };

    setMessages([...messages, newMessage2]);
    setInputText("");
  };

  return (
    <div className="container mt-5">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.fromUser ? "user" : "bot"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

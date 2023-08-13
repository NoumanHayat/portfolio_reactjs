import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch,Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Nevbar from "./component/nevbar/index";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skill from "./pages/Skill";
import PortfolioSection from "./pages/Portfolio";
import Services from "./pages/Services/index";
import "./style.css";
import Contact from "./pages/Contact/index";
import ScrollTop from "./component/ScrollTop/index";
import ChatBot from "./chatbot/index";
import Text from "./test/index";
import Admin from './admin/index';
function Main() {
  return (
    <div>
      <Nevbar />
      <main id="main">
        <Home />
        <About />
        <Skill />
        <Resume />
        <PortfolioSection />
        <Services />
        <Contact />
        <ScrollTop />

      </main>
      <ChatBot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [messages, setMessages] = useState([
//     {
//       role: "system",
//       content:
//         "i need help in learning python. maximum response limit is 750 token",
//     },
//   ]);
//   const [inputText, setInputText] = useState("");

//   const handleSendMessage = async () => {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo-16k",
//         // max_tokens: 750,
//         temperature: 0.7,
//         messages: [
//           ...messages,

//           {
//             role: "user",
//             content: inputText,
//           },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer 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",
//         },
//       }
//     );

//     const newMessages = [
//       ...messages,
//       { role: "user", content: inputText },
//       { role: "assistant", content: response.data.choices[0].message.content },
//     ];
//     setMessages(newMessages);
//     setInputText("");
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index} className={message.role}>
//             {message.content}
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default App;

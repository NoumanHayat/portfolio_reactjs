import Login from "./login/index";
import React, { useState, useEffect } from "react";
import Dashboard from "./dashboard/index";
import { loginCheck } from "./../function";
import ChatGPT from '../chatGPT/index'
function Screen() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    let check = loginCheck();
    setLogin(check);
  });
  return <div>{login ? <Dashboard /> : <Login />} <ChatGPT /></div>;
}

export default Screen;

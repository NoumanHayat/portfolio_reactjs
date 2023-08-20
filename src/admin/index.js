import Login from "./login/index";
import React, { useState, useEffect } from "react";
import Dashboard from "./dashboard/index";
import { LoginCheck } from "./../function";

import axios from "axios";

import ChatGPT from "../chatGPT/index";
function Screen() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    async function fetchData() {
      let res =await LoginCheck();
      setLogin(res);
    }
    fetchData();
  }, [setLogin]);

  const changeLoginStatus = (status) => {
    setLogin(status);
  };
  return (
    <div>
      {login ? <Dashboard /> : <Login changeLoginStatus={changeLoginStatus} />}{" "}
      <ChatGPT />
    </div>
  );
}

export default Screen;

import Login from "./login/index";
import React, { useState, useEffect } from "react";
import Dashboard from "./dashboard/index";
import { Flex, Button, Image, Text } from "@mantine/core";
import { loginCheck } from "./../function";
function Screen() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    let check = loginCheck();
    setLogin(check);
  });
  return <div>{login ? <Dashboard /> : <Login />}</div>;
}

export default Screen;

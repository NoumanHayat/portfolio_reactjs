import io from "socket.io-client";

export const testingFunction = (value) => {
  console.log("Working ...");
  const newSocket = io("http://localhost:3000");
  newSocket.emit("message", { message: "my message is here" }); // Replace with your server URL
  newSocket.on("message", (data) => {
    alert(data);
  });
};

export const loginCheck = () => {
  console.log("Working");
  return true;
};

export default { loginCheck, testingFunction };

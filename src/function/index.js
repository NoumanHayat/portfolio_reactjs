import io from "socket.io-client";
import axios from 'axios';
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
export const chatGpt = async (messages,inputText) => {
  if (inputText.trim() === ""){
    alert('Please enter a message');
    return;
  } 
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo-16k",
      // max_tokens: 750,
      temperature: 0.7,
      messages: [
        ...messages,

        {
          role: "user",
          content: inputText,
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
    }
  );

  const newMessages = [
    ...messages,
    { role: "user", content: inputText },
    { role: "system", content: response.data.choices[0].message.content },
  ];
  return(newMessages);
};
export const handleSendMessageChat = async (messages,inputText) => {
  if (inputText.trim() === ""){
    alert('Please enter a message');
    return;
  } 
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo-16k",
      // max_tokens: 750,
      temperature: 0.7,
      messages: [
        ...messages,

        {
          role: "user",
          content: inputText,
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
    }
  );

  const newMessages = [
    ...messages,
    { role: "user", content: inputText },
    { role: "system", content: response.data.choices[0].message.content },
  ];
  console.log(newMessages);
  return(newMessages);
};

export default { loginCheck, testingFunction };

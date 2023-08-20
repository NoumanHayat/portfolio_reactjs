import io from "socket.io-client";
import axios from "axios";
const ip = "192.168.43.106";
let isLogined = false;
export const testingFunction = (value) => {
  console.log("Working ...");
  const newSocket = io("http://localhost:5000/");
  newSocket.emit("message", { message: "my message is here" }); // Replace with your server URL
  newSocket.on("message", (data) => {
    alert(data);
  });
  newSocket.on("sendMessage", (data) => {
    alert(data);
  });
};
const autoLogin = async (props) => {};
const logout = async (props) => {};
export const signIn = async (email, password) => {
  try {
    const response = await axios.post(`http://${ip}:5000/userRoutes/signin`, {
      email: email,
      password: password,
    });

    let token = response.data.token;
    let userId = response.data.id;

    if (response.data.status === "success") {
      document.cookie = `id=${response.data.id}`;
      document.cookie = `token=${response.data.token}`;
      isLogined = true;
      return true;
    } else {
      return false;
    }
  } catch (error) {
    alert(error.message);

    return false;
  }
};
const signup = async (props) => {};
export const LoginCheck = async () => {
  const cookiesArray = document.cookie.split(";");
  let token = "null";
  for (let i = 0; i < cookiesArray.length; i++) {
    const cookie = cookiesArray[i].trim();
    if (cookie.startsWith("token=")) {
      token = cookie.split("=")[1];
      break;
    }
  }
  try {
    const response = await axios.post(
      `http://${ip}:5000/userRoutes/checkLogin`,
      {
        token: `Check ${token}`,
      }
    );

    if (response.data.status === "success") {
      console.log("Success");
      return true;
    } else {
      console.log(response.data.message);
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
export const chatGpt = async (messages, inputText) => {
  if (inputText.trim() === "") {
    alert("Please enter a message");
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
  return newMessages;
};
export const handleSendMessageChat = async (messages, inputText) => {
  if (inputText.trim() === "") {
    alert("Please enter a message");
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
  return newMessages;
};
export const sendMail = async (
  email = "noumanhayat35@gmail.com",
  subject = "texting",
  message = "texting"
) => {
  const cookiesArray = document.cookie.split(";");
  let token = "null";
  for (let i = 0; i < cookiesArray.length; i++) {
    const cookie = cookiesArray[i].trim();
    if (cookie.startsWith("token=")) {
      token = cookie.split("=")[1];
      break;
    }
  }
  try {
    const response = await axios.post(`http://${ip}:5000/api/sendEmail`, {
      token: `Check ${token}`,
      email,
      subject,
      message,
    });
    if ((response.data.status = "success")) {
      alert("Successfully send email");
    }else{
      alert("Fail to send");
    }
  } catch (error) {
    alert(error.message);
  }
};
export const clientSiket = async () => {};
export const getContent = async () => {
  const cookiesArray = document.cookie.split(";");
  let token = "null";
  for (let i = 0; i < cookiesArray.length; i++) {
    const cookie = cookiesArray[i].trim();
    if (cookie.startsWith("token=")) {
      token = cookie.split("=")[1];
      break;
    }
  }
  try {
    const response = await axios.post(`http://${ip}:5000/api/getContact`, {
      token: `Check ${token}`,
    });

    if (response.data.status === "success") {
      return response.data.message;
    } else {
      return [];
    }
  } catch (error) {
    alert(error.message);

    return [];
  }
};
export const sendContact = async (
  email = "noumanhayat35@gmail.com",
  subject = "texting",
  message = "texting",
  name = "noumanhayat35"
) => {
  try {
    const response = await axios.post(`http://${ip}:5000/api/sendContact`, {
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    alert("Successfully send email");
  } catch (error) {
    alert(error.message);
  }
};
export const deleteContact= async (name,email,subject)=>{
  try {
    const response = await axios.post(`http://${ip}:5000/api/deleteContact`, {
      name: name,
      email: email,
      subject: subject,
    });
    alert("Successfully Deleted");
  } catch (error) {
    alert(error.message);
  }
}

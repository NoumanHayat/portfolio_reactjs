import React, { useState } from "react";
import Modal from "./../../component/ModalChat/index";

import { handleSendMessageChat } from "./../../function/index";
function Conversations() {
  const conversations = [
    {
      name: "Nouman Hayat",
      email: "noumanhayat35@gmail.com",
      socketid: "",
      message: [],

      // Add other properties as needed
    },
  ];
  const [messages, setMessages] = useState([{role: "user",content:'hello world!'},{role: "system",content:'hello world!'}]);
  const [inputText, setInputText] = useState("");
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
                        {messages.map((message, index) => (
                          <div
                            key={index}
                            className={`message ${
                              message.role == "user" ? "user" : "bot"
                            }`}
                            style={{
                              textAlign: ` ${
                                message.role == "user" ? "start" : "end"
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
                    <div className="card-body">
                      <textarea
                        rows="4"
                        cols="80"
                        className="form-control"
                        placeholder="Here can be your Message"
                        value=""
                      >
                        Lamborghini Mercy, Your chick she so thirsty, I'm in
                        that two seat Lambo.
                      </textarea>
                    </div>

                    <div className="button-container mr-auto ml-auto">
                      <button type="button" className="btn bg-gradient-info ">
                        Send
                      </button>
                    </div>
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
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversations;

import React, { useState } from "react";
import Modal from "./../../component/ModalChat/index";
import { Textarea } from "@mantine/core";

export default function Card({ conversation, addMessage }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputText, setInputText] = useState("");

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
                      {conversation.conversation.map((message, index) => (
                        <div
                          key={index}
                          className={`message ${
                            message.role == "user" ? "user" : "bot"
                          }`}
                          style={{
                            textAlign: ` ${
                              message.role == "user" ? "end" : "start"
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
                  <form>
                    <div className="card-body">
                      <textarea
                        autoFocus="autoFocus"
                        rows="4"
                        cols="80"
                        className="form-control"
                        placeholder="Here can be your Message"
                        onChange={(e) => {
                          setInputText(e.target.value);
                        }}
                        value={inputText}
                      ></textarea>
                      {/* <Textarea
                          placeholder="Enter your text here"
                          onChange={(e) => {
                            setInputText(e.target.value);
                          }}
                          value={inputText}
                        /> */}
                    </div>

                    <div className="button-container mr-auto ml-auto">
                      <button
                        type="button"
                        onClick={() => {
                          addMessage(conversation.id, {
                            role: "user",
                            content: inputText,
                          });
                        }}
                        className="btn bg-gradient-info "
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

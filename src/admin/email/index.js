import React, { useEffect, useState } from "react";
import Modal from "../../component/ModalAdmin/index";
import "./style.css";
import { getContent,sendMail,deleteContact } from "./../../function/index";
function EmailInformation() {
  const [email, setEmail] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const temp = await getContent();
      setEmail(temp);
      console.log(temp);
      // ...
    }
    fetchData();
  }, [setEmail]);
  return (
    <div className="row">
      <div className="col-md-7 mt-4">
        <div className="card">
          <div className="card-header pb-0 px-3">
            <h6 className="mb-0">Email Information</h6>
          </div>
          <div className="card-body pt-4 p-3">
            <ul className="list-group">
              {email.map((item, index) => (
                <EmailItem
                  key={index}
                  name={item.name}
                  Message={item.message}
                  email={item.email}
                  Subject={item.subject}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailItem({ name, Message, email, Subject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenView, setIsModalOpenView] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);

  const [subjectReply,setSubjectReply] = useState('');
  const [messageReply,setMessageReply] = useState('');
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
        <div className="d-flex flex-column">
          <h6 className="mb-3 text-sm">{name}</h6>
          <span className="mb-2 text-xs">
            Email Address:{" "}
            <span className="text-dark ms-sm-2 font-weight-bold">{email}</span>
          </span>
          <span className="text-xs">
            Subject:{" "}
            <span className="text-dark ms-sm-2 font-weight-bold">
              {Subject}
            </span>
          </span>
          <span className="text-xs">
            Message:{" "}
            <span className="text-dark ms-sm-2 font-weight-bold">
              {Message}
            </span>
          </span>
        </div>
        <div className="ms-auto text-end">
          <a
            className="btn btn-link text-danger text-gradient px-3 mb-0"
            onClick={() => {
              setIsModalOpenDelete(true);
            }}
          >
            <i className="far fa-trash-alt me-2"></i>Delete
          </a>
          <a
            className="btn btn-link text-dark px-3 mb-0"
            onClick={() => {
              setIsModalOpenView(true);
            }}
          >
            <i
              className="fas fa-pencil-alt text-dark me-2"
              aria-hidden="true"
            ></i>
            View
          </a>
          <a
            className="btn btn-link text-dark px-3 mb-0"
            onClick={setIsModalOpen}
          >
            <i
              className="fas fa-pencil-alt text-dark me-2"
              aria-hidden="true"
            ></i>
            Reply
          </a>
        </div>
      </li>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Reply Email</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6 pr-1">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled
                              placeholder="email"
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 px-1">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              disabled
                              value={name}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-10">
                          <div className="form-group">
                            <label>Subject</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Subject here..."
                              value={subjectReply}
                              onChange={(e)=>{setSubjectReply(e.target.value)}}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Message</label>
                            <textarea
                              rows="4"
                              cols="80"
                              className="form-control"
                              placeholder="Here can be your Message"
                              // messageReply,setMessageReply
                              value={messageReply}
                              onChange={(e)=>{setMessageReply(e.target.value)}}
                            >
                              
                            </textarea>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn bg-gradient-info btn-fill pull-right"
                        onClick={()=>{ sendMail(email,subjectReply,messageReply)}}
                      >
                        Send Mail
                      </button>
                      <div className="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-user">
                  <div className="card-body">
                    <div className="author">
                      <a href="#">
                        <h5 className="title">{Subject}</h5>
                      </a>
                    </div>
                    <p className="description text-center">
                    {Message}
                    </p>
                  </div>
                  <hr />
                  {/* <div className="button-container mr-auto ml-auto">
                    <button
                      href="#"
                      className="btn btn-simple btn-link btn-icon"
                    >
                      <i className="fa fa-facebook-square"></i>
                    </button>
                    <button
                      href="#"
                      className="btn btn-simple btn-link btn-icon"
                    >
                      <i className="fa fa-twitter"></i>
                    </button>
                    <button
                      href="#"
                      className="btn btn-simple btn-link btn-icon"
                    >
                      <i className="fa fa-google-plus-square"></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isModalOpenView}
        onClose={() => {
          setIsModalOpenView(false);
        }}
      >
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6 pr-1">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled
                              placeholder="email"
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 px-1">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              disabled
                              value={name}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-10">
                          <div className="form-group">
                            <label>Subject</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Subject here..."
                              disabled
                              value={Subject}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Message</label>
                            <textarea
                              rows="4"
                              cols="80"
                              className="form-control"
                              placeholder="Here can be your Message"
                              disabled
                              value={Message}
                            >
                              Lamborghini Mercy, Your chick she so thirsty, I'm
                              in that two seat Lambo.
                            </textarea>
                          </div>
                        </div>
                      </div>

                      <div className="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isModalOpenDelete}
        onClose={() => {
          setIsModalOpenDelete(false);
        }}
      >
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">
                      Are you sure you want to Delete?
                    </h4>
                  </div>
                  <div className="button-row button-container">
                    <button
                      type="button"
                      className="btn bg-gradient-info btn-fill pull-right"
                      onClick={()=>{deleteContact(name,email,Subject)}}
                    >
                      Yes
                    </button>

                    <button className="btn btn-danger">No</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EmailInformation;

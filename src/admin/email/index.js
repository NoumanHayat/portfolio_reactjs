import React, { useState } from "react";
import Modal from "../../component/ModalAdmin/index";
function EmailInformation() {
  return (
    <div className="row">
      <div className="col-md-7 mt-4">
        <div className="card">
          <div className="card-header pb-0 px-3">
            <h6 className="mb-0">Email Information</h6>
          </div>
          <div className="card-body pt-4 p-3">
            <ul className="list-group">
              <EmailItem
                name="Oliver Liam"
                companyName="Viking Burrito"
                email="oliver@burrito.com"
                vatNumber="FRB1235476"
              />
              <EmailItem
                name="Lucas Harper"
                companyName="Stone Tech Zone"
                email="lucas@stone-tech.com"
                vatNumber="FRB1235476"
              />
              <EmailItem
                name="Ethan James"
                companyName="Fiber Notion"
                email="ethan@fiber.com"
                vatNumber="FRB1235476"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailItem({ name, companyName, email, vatNumber }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              {vatNumber}
            </span>
          </span>
          <span className="text-xs">
            Message:{" "}
            <span className="text-dark ms-sm-2 font-weight-bold">
              {vatNumber}
            </span>
          </span>
        </div>
        <div className="ms-auto text-end">
          <a
            className="btn btn-link text-danger text-gradient px-3 mb-0"
            href="#"
          >
            <i className="far fa-trash-alt me-2"></i>Delete
          </a>
          <a className="btn btn-link text-dark px-3 mb-0" href="#">
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
                              value="nouman@gmail.com"
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
                              value="michael23"
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
                              value=""
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
                              value=""
                            >
                              Lamborghini Mercy, Your chick she so thirsty, I'm
                              in that two seat Lambo.
                            </textarea>
                          </div>
                        </div>
                      </div>
                      
                      <button
                            type="button"
                            className="btn bg-gradient-info btn-fill pull-right"
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
                        
                        <h5 className="title">Subject</h5>
                      </a>
                      
                    </div>
                    <p className="description text-center">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                  </div>
                  <hr />
                  <div className="button-container mr-auto ml-auto">
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

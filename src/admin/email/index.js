import React from 'react';

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
  return (
    <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
      <div className="d-flex flex-column">
        <h6 className="mb-3 text-sm">{name}</h6>
        <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">{email}</span></span>
        <span className="text-xs">Subject: <span className="text-dark ms-sm-2 font-weight-bold">{vatNumber}</span></span>
        <span className="text-xs">Message: <span className="text-dark ms-sm-2 font-weight-bold">{vatNumber}</span></span>

      </div>
      <div className="ms-auto text-end">
        <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="#"><i className="far fa-trash-alt me-2"></i>Delete</a>
        <a className="btn btn-link text-dark px-3 mb-0" href="#"><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>View</a>
        <a className="btn btn-link text-dark px-3 mb-0" href="#"><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Reply</a>

      </div>
    </li>
  );
}

export default EmailInformation;

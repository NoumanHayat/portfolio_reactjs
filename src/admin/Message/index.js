import React from 'react';

function Conversations() {
  const conversations = [
    // Define your conversation data here
    {
      name: 'Sophie B.',
      message: 'Hi! I need more information..'
      
      // Add other properties as needed
    },
    {
      name: 'Anne Marie',
      message: 'Awesome work, can you..'
      // Add other properties as needed
    },
    {
        name: 'Sophie B.',
        message: 'Hi! I need more information..'
        
        // Add other properties as needed
      },
      {
        name: 'Anne Marie',
        message: 'Awesome work, can you..'
        // Add other properties as needed
      },
      {
        name: 'Sophie B.',
        message: 'Hi! I need more information..'
        
        // Add other properties as needed
      },
      {
        name: 'Anne Marie',
        message: 'Awesome work, can you..'
        // Add other properties as needed
      },
      {
        name: 'Sophie B.',
        message: 'Hi! I need more information..'
        
        // Add other properties as needed
      },
      {
        name: 'Anne Marie',
        message: 'Awesome work, can you..'
        // Add other properties as needed
      },
      {
        name: 'Sophie B.',
        message: 'Hi! I need more information..'
        
        // Add other properties as needed
      },
      {
        name: 'Anne Marie',
        message: 'Awesome work, can you..'
        // Add other properties as needed
      },
      {
        name: 'Sophie B.',
        message: 'Hi! I need more information..'
        
        // Add other properties as needed
      },
      {
        name: 'Anne Marie',
        message: 'Awesome work, can you..'
        // Add other properties as needed
      },
      {
        name: 'Sophie B.',
        message: 'Hi! I need more information..'
        
        // Add other properties as needed
      },
      {
        name: 'Anne Marie',
        message: 'Awesome work, can you..'
        // Add other properties as needed
      },
    // ... more conversation items
  ];

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
                  <li key={index} className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                    <div className="avatar me-3">
                      {/* Replace the image source with conversation.avatar */}
                      <img src={conversation.avatar} alt={conversation.name} className="border-radius-lg shadow" />
                    </div>
                    <div className="d-flex align-items-start flex-column justify-content-center">
                      <h6 className="mb-0 text-sm">{conversation.name}</h6>
                      <p className="mb-0 text-xs">{conversation.message}</p>
                    </div>
                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                  </li>
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

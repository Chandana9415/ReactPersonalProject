import React from 'react'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
              Hello world from contact.js
                <h5 class="card-title">{contact.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.name}</h6>
                {/* <p class="card-text">{contact.company.catchPhrase}</p> */}
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts;
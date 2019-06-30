import React from 'react'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts}
          {contacts.map((contact) => (
            
            <div class="card">
            {contact}
              <div class="card-body">
                <h5 class="card-title">{contact.title}</h5>
                {/* <h6 class="card-subtitle mb-2 text-muted">{this.contact.location_type}</h6> */}
                <p class="card-text">{contact.company.catchPhrase}</p>
                {/* <img src="https://robohash.org/a"></img> */}
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts;
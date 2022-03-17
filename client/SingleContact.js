import React from 'react';

const SingleContact = (props) => {
  console.log(props);
  return (
    <div id="single-contact">
      <img src={props.selectedContact.imageUrl} />
      <div id="contact-info">
        <p>Name: {props.selectedContact.name}</p>
        <p>Email: {props.selectedContact.email}</p>
        <p>Phone: {props.selectedContact.phone}</p>
      </div>
    </div>
  );
};

export default SingleContact;

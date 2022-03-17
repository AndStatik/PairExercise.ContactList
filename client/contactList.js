import React from 'react'

import ContactRow from './contactRow'; 

const ContactList = (props) => {
 return (
 <table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
    {props.contacts&&
      props.contacts.map((contact) => {
        return <ContactRow key={contact.id} contact={contact}/>
      })
    }
  </tbody>
</table>
)
}

export default ContactList
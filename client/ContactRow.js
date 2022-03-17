import React from 'react'

const ContactRow = (props) => {
  //console.log(contact)
  return (
    <tr>
            <td>{props.contact.name}</td>
            <td>{props.contact.phone}</td>
            <td>{props.contact.email}</td>
          </tr>
  )
}

export default ContactRow
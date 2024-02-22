import React from 'react'
import './contact.css'
const Contact = ({contact,toggle}) => {
  return (
    <div className={contact? "contact-container active":"contact-contianer"}>
        <div className="transparent" onClick={toggle}></div>
        <div className={contact? "contact-form active":"contact-form"}>form</div>
    </div>
  )
}

export default Contact
import React from 'react'
import Contact from './Contact'

const ContactsList = ({contacts,delcon,updcon}) => {
    return (
        <div>
           {contacts.map((contact)=>
           <Contact key={contact.id} contact={contact} delcon={delcon} updcon={updcon}/>
           )}
        </div>
    )
}
export default ContactsList
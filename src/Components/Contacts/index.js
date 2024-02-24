import { useState, useEffect } from 'react';
import './index.css';
import Form from './Form';
import List from './List';

function Contacts() {
    const [contacts, setContacts] = useState([
        {fullname: "mehmet", phone_number: 123},
        {fullname: "juliet", phone_number: 456},
        {fullname: "fikret", phone_number: 321}
    ])

    useEffect(() => {
        console.log("contacts array in Contacts/index.js: ", contacts);
    }, [contacts])

    return(
        <div className='contactsParent'>
            <h2>Telephone Book</h2>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts}/>
            <p className='signature'>
                by Bilal Özdemir
            </p>
        </div>
    )
}

export default Contacts
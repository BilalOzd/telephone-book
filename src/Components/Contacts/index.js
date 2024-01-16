import { useState, useEffect } from 'react';
import './index.css';
import Form from './Form';
import List from './List';

function Contacts() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return(
        <div className='contactsParent'> Contact List
            <List/>
            <br/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
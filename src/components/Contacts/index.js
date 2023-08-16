import { useEffect, useState } from 'react'
import List from './List';
import Form from './Form';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);



    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#bbbbb',
            alignItems: 'center',

        }}>
            <List
                contacts={contacts} />
            <Form
                contacts={contacts}
                addContact={setContacts} />
        </div>
    )
}

export default Contacts;
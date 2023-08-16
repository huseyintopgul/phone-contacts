import { useEffect, useState } from 'react'
import List from './List';
import Form from './Form';

const Contacts = () => {
    const [contacts, setContacts] = useState([
        { fullName: 'hüseyin topgül', phoneNumber: '05555555555' },
        { fullName: 'esra topgül', phoneNumber: '444444444' },
        { fullName: 'muhammed topgül', phoneNumber: '3333333333' }
    ]);



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
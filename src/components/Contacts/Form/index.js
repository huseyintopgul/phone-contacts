import { useEffect, useState } from "react"


const initialFormValues = { fullName: '', phoneNumber: '' }
const Form = ({ contacts, addContact }) => {
    const [form, setForm] = useState(initialFormValues)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullName === '' || form.phoneNumber === '') {
            return false;
        }
        addContact([...contacts, form])
    }
    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])
    return (
        <form onSubmit={onSubmit}
            style={{
                border: 'solid',
                width: '600px',
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                fontSize: 20,
                backgroundColor: '#ccc'
            }}>
            <div style={{
                marginBottom: 10
            }}>
                <input name='fullName' placeholder='Ad Soyad' value={form.fullName} onChange={handleChange} />
            </div>
            <div>
                <input name='phoneNumber' placeholder='Tel. No...' value={form.phoneNumber} onChange={handleChange} />
            </div>
            <div>
                <button>Ekle</button>
            </div>
        </form>
    )
}

export default Form
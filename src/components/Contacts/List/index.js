import React, { useState } from 'react'

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()));
  })

  return (
    <div style={{
      border: 'solid',
      width: '600px',
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontSize: '15',
      backgroundColor:'#ccc'
    }}>
      <input
        name='filter'
        placeholder='Filitrele'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        size={30} />
      <div style={{
        padding: '20px',
      }}>
        {
          filtered.map((contact, i) => (
            <div key={i} style={{ padding: '10px', border: 'solid', backgroundColor:'#eee' }} >
              <span style={{ margin: '10px', }}>
                {contact.fullName}
              </span>
              <span>
                {contact.phoneNumber}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default List
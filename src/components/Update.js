import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import './Update.css'
const Update = ({ title, contact,updcon }) => {

    const [name, setName] = useState('');
    const [mbl, setMbl] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name==='' || mbl==='') {
            alert("Please add a contact");
            return;
        }
        updcon(contact);
        console.log("Helloooo:",contact);
        // setName('');
        // setMbl('');

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextField className="inputbox" label="Name" variant="outlined" value={contact.name} onChange={(e) => setName(e.target.value)}/>
                <TextField className="inputbox" label="Mobile Number" variant="outlined" value={contact.mbl} onChange={(e) => setMbl(e.target.value)}/>
                <Button className="inputbutton" variant="contained" type="submit">{title}</Button>
            </form>
        </div>
    )
}
export default Update
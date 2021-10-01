import { Card, CardContent, Container, Modal, Typography } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';

import './Contact.css';
import Update from './Update';
const Contact = ({contact,delcon,updcon}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:'40%',
        bgcolor: 'background.paper',
        borderRadius:5,
        p:4
      };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <div>
            <Card className="card">
                <CardContent>
                    <div className="identity">
                        <Typography variant="h6">{contact.name}</Typography>
                        <div >

                            <Tooltip disableFocusListener title="Edit">
                                <EditIcon className="icons" onClick={handleOpen}/>


                            </Tooltip>
                            <Tooltip disableFocusListener title="Delete">
                                <DeleteForeverIcon color="error" onClick={()=>delcon(contact.id)} />
                            </Tooltip>

                        </div>
                    </div>
                    <Typography variant="span">{contact.mbl}</Typography>
                </CardContent>
            </Card>

            <Modal open={open} onClose={handleClose} >
                <Container  sx={style}>
                    <div className="closeIcon" ><CloseIcon color="error" onClick={handleClose}/></div>
                    <Update title="Update Contact" contact={contact} updcon={updcon}/>
                    </Container>
            </Modal>


        </div>
    )
}
export default Contact
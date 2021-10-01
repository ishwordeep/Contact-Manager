import {Typography } from '@mui/material'
import React from 'react'
import './Header.css'
import AddButton from './AddButton.js'
const Header = ({title,onAdd,showAddButton}) => {
    return (
        <div className="header">
            <Typography variant="h4">Contact Manager</Typography>
            <AddButton  onAdd={onAdd} color={showAddButton?'error':'primary'} text={showAddButton?'Close':'Add'}/>
        </div>
    )
}
export default Header

import React from 'react'
import { Button } from '@mui/material'
export const AddButton = ({onAdd,text,color}) => {
    return (
        <div>
            <Button onClick={onAdd} variant="contained" color={color}>{text}</Button>
        </div>
    )
}
export default AddButton
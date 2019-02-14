import React from 'react'
import DeleteIcon from '@material-ui/icons/DeleteForever'
import IconButton from '@material-ui/core/IconButton'

const DeleteNote = ({onClick}) => (
    <IconButton onClick ={onClick}>
      <DeleteIcon/>
    </IconButton>   
)

export default DeleteNote
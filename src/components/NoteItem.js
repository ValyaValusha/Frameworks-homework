import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CheckedIcon from '@material-ui/icons/CheckCircleOutline'
import EditIcon from '@material-ui/icons/Edit'
import ArchiveIcon from '@material-ui/icons/Archive'
import UnArchiveIcon from '@material-ui/icons/Unarchive'
import DeleteNote from './DeleteNote'
import { NavLink } from 'react-router-dom'

const NoteItem = ({item, toggleNoteOnClick, deleteNoteOnClick, archiveNoteOnCLick}) => (
  <div className='card' 
      style={{
        display: item.isShown ? 'block' : 'none',
      }}
  >
    <Card> 

    <CardHeader title={item.title}     
    action={
            <>
            <IconButton onClick={toggleNoteOnClick} >
              {item.isCompleted ? (<CheckedIcon/>) : (<UncheckedIcon/>)}
            </IconButton>
            <IconButton onClick={archiveNoteOnCLick}>
              {item.isArchived ? (<UnArchiveIcon/>) : (<ArchiveIcon/>)}
            </IconButton>
            <NavLink to={{pathname:`/edit/${item.id}`}} >            
              <IconButton>
              < EditIcon/>             
              </IconButton>
            </NavLink>
           </>
      }/>

    <CardContent>
      <Typography component="p">
        {item.text}
      </Typography>
    </CardContent>

    <div className = 'deleteIcon' >
      <DeleteNote onClick = {deleteNoteOnClick}/>
    </div>
    
  </Card>
  </div>
)

export default NoteItem
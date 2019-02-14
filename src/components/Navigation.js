import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import NoteIcon from '@material-ui/icons/EventNote'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
    <AppBar className = 'navigation' position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          <NoteIcon/>
            Notes
          </Typography>
          <NavLink to={{pathname:`/`}} >
            <Typography variant="h5" color="inherit" noWrap>
                Home
            </Typography>
          </NavLink>
          <NavLink to={{pathname:`/archive`}} >
            <Typography variant="h5" color="inherit" noWrap>
                Archive
            </Typography>
          </NavLink>
        </Toolbar>    
    </AppBar>
)

export default Navigation
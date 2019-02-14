import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
 

const AddNote = ({ dispatch }) => {
    let input, textarea
    let url = 'http://localhost:4000/notes'
    
    return (
      <div className="container">
        <Typography className = 'title' variant="h5" color="inherit" noWrap>
                Add Note
        </Typography>
        <Card className='addCard'>

          <form className='addCard-container' onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim() && !textarea.value.trim()) {
              return
            }
            dispatch(addNote(url, input.value, textarea.value))
            input.value = ''
            textarea.value = ''
          }}>
          
            <input className = 'addCard-container__title-input' placeholder ='Type title' maxLength='50' ref={node => input = node} />
            <textarea wrap = 'hard' className = 'addCard-container__text-input' placeholder = "Note..." ref = {node => textarea = node}/>
            <Button variant="contained" color="secondary" type="submit" className = 'addCard-container__button'>
              Add Note
            </Button>
          </form>
        </Card>
      </div>
    )
  }
  
export default connect()(AddNote)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateNote } from '../actions'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'


let url = 'http://localhost:4000/notes/',
    input,
    textarea

const mapStateToProps = state => ({
    items: state.items
})


const mapDispatchToProps = dispatch => ({
  updateNote: (url, item) => dispatch(updateNote(url, item)),
})

class EditNote extends Component {

  render() {
    let id = this.props.location.pathname.slice(6);
    let note = this.props.items.filter(item => {return item.id === +id})[0];
    
    return(
      <>
        <Navigation/>
        <Typography className = 'title' variant="h5" color="inherit" noWrap>
                Edit Note
        </Typography>
        <Card className='addCard'>
            <form className='addCard-container' onSubmit={e => {
              e.preventDefault();

              this.props.updateNote(url + id, { 
                ...note,
                title: input.value,
                text: textarea.value,
              })
            }}>
              <input className = 'addCard-container__title-input' placeholder ='Type title' maxLength='50' defaultValue = {note.title} ref={node => input = node} />
              <textarea wrap = 'hard' className = 'addCard-container__text-input' placeholder = "Note..." defaultValue = {note.text} ref = {node => textarea = node}/>
              <div className='buttonContainer'>   
                <Button variant="contained" color="secondary" type="submit" className = 'editCard-button'>
                  Update Note
                </Button> 
                <Button component={Link} to="/" variant="contained" color="secondary" className = 'editCard-button'>
                  Back
                </Button>
              </div>
          </form>
        </Card>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditNote)

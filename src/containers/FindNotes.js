import React from 'react'
import { connect } from 'react-redux'
import { findNotes } from '../actions'
import SearchIcon from '@material-ui/icons/Search'

const mapStateToProps = state => ({
    items: state.items,
})

const FindNotes = ({ dispatch }) => {
    let input

    return (
        <form className='searchCard-container' onChange={e => {
          e.preventDefault()
          dispatch(findNotes(input.value))
        }}>
          <div className='searchCard-container__icon'>
          <SearchIcon/>
          </div>
          <input className = 'addCard-container__title-input' placeholder ='Search notes...' maxLength='50' ref={node => input = node} />
        </form>
    )
  }
  
  
export default connect(mapStateToProps)(FindNotes)
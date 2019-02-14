import React, { Component } from 'react'
import NoteItem from './NoteItem'

let url = 'http://localhost:4000/notes/'

class NotesList extends Component {
   
  constructor(props) {
    super(props);
    this.addItems = this.addItems.bind(this);
  }

  addItems() {
    return this.props.items.map((item) => {
      { if(item && item.isArchived === this.props.showArchived) {return <NoteItem key={item.id} item = {item} 
      toggleNoteOnClick = {() => {this.props.updateNote(url + item.id, {
        ...item,
         isCompleted: !item.isCompleted
      })}} 
      deleteNoteOnClick= {() => {this.props.deleteNote(url + item.id, item.id)}}
      archiveNoteOnCLick = {() => {this.props.updateNote(url + item.id, {
        ...item,
        isArchived: !item.isArchived
      })}}
      />}
      }
    })
  }

  componentDidMount() {
    this.props.getNotes(url);
  }

  render() {
    const notes =  this.addItems();
    return (
    <div className="cards-container">
      {  this.props.items.length > 0 && !this.props.isLoading && [notes] }
    </div> 
    )
  }
}
export default NotesList

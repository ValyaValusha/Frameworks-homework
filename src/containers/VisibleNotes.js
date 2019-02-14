import { connect } from 'react-redux'
import { itemsGetNotes, deleteNote, updateNote } from '../actions'
import NotesList from '../components/NotesList'

const mapStateToProps = state => ({
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
})

const mapDispatchToProps = dispatch => ({
  getNotes: (url) => dispatch(itemsGetNotes(url)),
  deleteNote: (url, id) => dispatch(deleteNote(url, id)),
  updateNote: (url, item) => dispatch(updateNote(url, item)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesList)

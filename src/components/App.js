import React from 'react'
import Navigation from './Navigation'
import AddNote from '../containers/AddNote'
import VisibleNotes from '../containers/VisibleNotes'
import FindNotes from '../containers/FindNotes'


const App = () => (
    <div>
      <Navigation/>
      <AddNote />
      <FindNotes/>
      <VisibleNotes showArchived = {false}/>
    </div>
)

export default App
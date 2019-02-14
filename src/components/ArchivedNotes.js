import React from 'react'
import VisibleNotes from '../containers/VisibleNotes'
import FindNotes from '../containers/FindNotes'
import Navigation from './Navigation'


const ArchivedNotes = () => (
    <div>
      <Navigation/>
      <FindNotes/>
      <VisibleNotes showArchived = {true}/>
    </div>
)

export default ArchivedNotes
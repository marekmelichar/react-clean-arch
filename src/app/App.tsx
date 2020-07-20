import React from 'react';
import { Note } from '../domain/entity/Note'
import { NoteServiceImplementation } from '../domain/useCase/NoteService'
import { NoteRepositoryImplementation } from '../repository/NoteRepositoryImplementation'

class App extends React.Component {

  state = {
    notes: []
  }

  componentDidMount = () => {
    this.getNotes()
  }
  
  getNotes = async () => {
    const noteRepository = new NoteRepositoryImplementation()
    const noteService = new NoteServiceImplementation(noteRepository)
    const notes = await noteService.GetNotes()

    console.log('notes', notes);
    
    
    return this.setState({
      notes
    })
  }

  render() {
    return (
      <div>
        Notes:
        <ul>
          {this.state.notes.map((note: Note) => <li key={note.id}>{note.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default App;

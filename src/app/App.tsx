import React from 'react';
import NotesList from './containers/NotesList/NotesList';

class App extends React.Component {
  render() {
    return (
      <div>
        Notes:
        <NotesList />
      </div>
    )
  }
}

export default App;

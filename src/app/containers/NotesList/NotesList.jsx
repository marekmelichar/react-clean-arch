import React, { Component } from 'react';
import { connect } from "react-redux";
import { getNotes } from '../../actions'

class NotesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  componentDidMount = () => {
    this.props.getNotes()
  }
  
  render() {
    return (
      <ul>
        {/* {this.state.notes.map((note: Note) => <li key={note.id}>{note.title}</li>)} */}
        123456
      </ul>
    )
  }
}

const mapStateToProps = ({ get_notes }) => ({
  get_notes
})

export default connect(mapStateToProps, { getNotes } )(NotesList);
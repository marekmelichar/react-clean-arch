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

  componentDidUpdate = (prevProps) => {
    console.log('prevProps', prevProps);
    console.log('this.props', this.props);
    if (prevProps.get_notes.payload !== this.props.get_notes.payload) {
      console.log('get_notes', this.props.get_notes);
      this.setState({ notes: this.props.get_notes.payload })
    }
  }
  
  render() {
    console.log('render');
    return (
      <ul>
        {this.state.notes.map(note => <li key={note.id}>{note.title}</li>)}
      </ul>
    )
  }
}

const mapStateToProps = ({ get_notes }) => ({
  get_notes
})

export default connect(mapStateToProps, { getNotes } )(NotesList);
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getNotes, createNote, editNote } from '../../actions'
import { withTranslation } from 'react-i18next';
import { v4 } from 'uuid'

class Notes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      enableEditId: '',
      valueEdit: ''
    };
  }

  componentDidMount = () => {
    this.props.getNotes()
  }

  // componentDidUpdate = (prevProps) => {
  //   // console.log('prevProps.get_notes.payload', prevProps.get_notes.payload);
  //   // console.log('this.props.get_notes.payload', this.props.get_notes.payload);
  //   // if(prevProps.get_notes.payload !== this.props.get_notes.payload) {
  //   //   this.props.getNotes()
  //   // }
  // }

  // TODO: optimization od Notes rendering
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log('nextProps, nextState', nextProps, nextState);
  //   // if(nextProps.get_notes.payload === this.props.get_notes.payload) {
  //   //   return false;
  //   // } else {
  //     return true;
  //   // }

  //   // if(nextState.value !== this.state.value) {
  //   //   return true;
  //   // }

    
  // }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    if(this.state.value) {
      const newNote = {
        id: v4(),
        title: this.state.value,
      }

      this.props.createNote(newNote)
  
      this.setState(state => ({
        ...state,
        value: ''
      }))
    }
  }

  handleEdit = (note) => {
    this.setState(state => ({
      ...state,
      enableEditId: note.id,
      valueEdit: note.title
    }))
  }

  handleEditSubmit = (event, id, title) => {
    event.preventDefault()

    console.log('EDIT', id, title);

    const editedNote = {
      id,
      title,
    }

    this.props.editNote(editedNote)

    this.setState(state => ({
      ...state,
      enableEditId: '',
      valueEdit: ''
    }))
  }

  handleEditChange = event => {
    this.setState({ valueEdit: event.target.value })
  }
  
  render() {
    
    const { t, get_notes, create_note } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <p>{t('notes')}: </p>
        <ul>
          {get_notes.payload &&
            get_notes.payload.map(note => <li key={note.id}>
              <div>{note.title} <span onClick={() => this.handleEdit(note)}>edit</span> <span onClick={this.handleDelete}>delete</span></div>
              {this.state.enableEditId === note.id && <form onSubmit={event => this.handleEditSubmit(event, note.id, this.state.valueEdit)}>
                <input
                  type="text"
                  value={this.state.valueEdit}
                  onChange={this.handleEditChange}
                />
              </form>}
            </li>)}
        </ul>
        <div>{create_note.error &&
          <p>{create_note.error.message}</p>}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ get_notes, create_note }) => ({
  get_notes,
  create_note
})

export default withTranslation()(connect(mapStateToProps, { getNotes, createNote, editNote } )(Notes))
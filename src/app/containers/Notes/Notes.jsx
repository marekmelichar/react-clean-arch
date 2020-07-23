import React, { Component } from 'react';
import { connect } from "react-redux";
import { getNotes, createNote } from '../../actions'
import { withTranslation } from 'react-i18next';
import { v4 } from 'uuid'

class Notes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  componentDidMount = () => {
    this.props.getNotes()
  }

  componentDidUpdate = (prevProps) => {
    // console.log('prevProps.get_notes.payload', prevProps.get_notes.payload);
    // console.log('this.props.get_notes.payload', this.props.get_notes.payload);
    // if(prevProps.get_notes.payload !== this.props.get_notes.payload) {
    //   this.props.getNotes()
    // }
  }

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
    this.setState({ value: event.target.value });
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
            get_notes.payload.map(note => <li key={note.id}>{note.title}</li>)}
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

export default withTranslation()(connect(mapStateToProps, { getNotes, createNote } )(Notes))



























// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { getNotes } from '../../actions'
// import { withTranslation } from 'react-i18next';

// class Notes extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: []
//     };
//   }

//   componentDidMount = () => {
//     this.props.getNotes()
//   }

//   // componentDidUpdate = (prevProps) => {
//   //   if (prevProps.get_notes.payload !== this.props.get_notes.payload) {
//   //     this.setState({ notes: this.props.get_notes.payload })
//   //   }
//   // }

//   shouldComponentUpdate = (nextProps) => {
//     if(nextProps.get_notes.payload === this.props.get_notes.payload) {
//       return false;
//     }

//     return true;
//   }
  
//   render() {
//     const { t, get_notes } = this.props

//     console.log('render notes', get_notes.payload);

//     return (
//       <div>
//         <p>{t('notes')}: </p>
//         <ul>
//           {get_notes.payload.map(note => <li key={note.id}>{note.title}</li>)}
//         </ul>
//       </div>
//     )
//   }
// }

// const mapStateToProps = ({ get_notes }) => ({
//   get_notes
// })

// export default withTranslation()(connect(mapStateToProps, { getNotes } )(Notes))
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getNotes } from '../../actions'
import { withTranslation } from 'react-i18next';

class Notes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  componentDidMount = () => {
    this.props.getNotes()
  }

  shouldComponentUpdate = (nextProps) => {
    if(nextProps.get_notes.payload === this.props.get_notes.payload) {
      return false;
    }

    return true;
  }
  
  render() {
    const { t, get_notes } = this.props

    return (
      <div>
        <p>{t('notes')}: </p>
        <ul>
          {get_notes.payload &&
            get_notes.payload.map(note => <li key={note.id}>{note.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ get_notes }) => ({
  get_notes
})

export default withTranslation()(connect(mapStateToProps, { getNotes } )(Notes))



























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
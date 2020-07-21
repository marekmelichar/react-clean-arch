// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { StoreState } from "../../reducers";
// import { INote } from '../../../core/domain/entity/note'

// // import {
// //   getNotes,
// //   IgetNotesAction
// // } from "../../actions";

// // interface INotesListProps {
// //   getNotes: IgetNotesAction
// // }

// interface INotesListState {
//   notes: INote[]
// }

// class _NotesList extends Component<INotesListProps, INotesListState> {

//   constructor(props: INotesListProps) {
//     super(props);

//     this.state = {
//       notes: []
//     };
//   }

//   componentDidMount = () => {
//     this.props.getNotes()
//   }
  
//   render() {
//     return (
//       <ul>
//         {/* {this.state.notes.map((note: Note) => <li key={note.id}>{note.title}</li>)} */}
//         123456
//       </ul>
//     )
//   }
// }

// // export default NotesList;





// const mapStateToProps = ({
//   get_notes
// }: StoreState): {
//   get_notes: IgetNotesAction
// } => {
//   return {
//     get_notes
//   };
// };

// export const NotesList = connect(mapStateToProps, {
//   getNotes
// })(_NotesList);
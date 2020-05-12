import React from 'react';
import './App.css';
import Editor from './components/editor/editor'
import SideNav from './components/sidenav/sidenav'


const firebase = require('firebase')

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }

  render() {
    return(
      <div>
        <SideNav 
        selectedNoteIndex={this.state.selectedNoteIndex} 
        notes={this.state.notes}
        deleteNote={this.deleteNote}
        selectNote={this.selectNote}
        newNote={this.newNote}></SideNav>
        {
          this.state.selectedNote ? 
          <Editor selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          noteUpdate={this.noteUpdate}></Editor> : null
        }
        
      </div>
    );
}

componentDidMount = () => {
  firebase
  .firestore()
  .collection('notes')
  //going to be called whenever notes collection is updated in firebase
  .onSnapshot(serverUpdate => {
    const notes = serverUpdate.docs.map(_doc => {
      const data = _doc.data()
      data['id'] = _doc.id
      return data
    })
    console.log(notes)
    this.setState({ notes: notes})
  })
}
selectNote = (note,index) => {
  this.setState({selectedNoteIndex: index, selectedNote: note})
}
noteUpdate = (id, noteObj) => {
  console.log(id,noteObj)
}

}

export default App;

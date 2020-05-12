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
        <SideNav></SideNav>
        <Editor></Editor>
        
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

}

export default App;

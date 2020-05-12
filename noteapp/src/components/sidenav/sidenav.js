import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Button, Divider} from '@material-ui/core';
import NavItem from '../navitem/navitem';


class SideNav extends React.Component {
    constructor() {
        super()
        this.state = {
            addingNote: false,
            title: null
        }
    }
    render() {

        const{ notes, classes, selectedNoteIndex } = this.props

        if(notes) {
            return(
                <div className={classes.SideNavCont}>
                    <Button onClick={this.newNoteBut} 
                    className={classes.newNoteBut}>
                        {this.state.addingNote ? 'Nevermind' : 'New Note'}</Button>
                    {
                        this.state.addingNote ? 
                        <div>
                            <input type='text' className={classes.newNoteBut}
                            placeholder='Note Title'
                            onKeyUp={(e) => this.updateTitle(e.target.value)}>
                            </input>
                            <Button className={classes.noteSubmit}
                            onClick={this.newNote}>Submit</Button>
                        </div> :
                        null
                    }
                    <List>
                        {/* mapping all the notes from the props */}
                        {
                            notes.map((_note, _index) => {
                                return(
                                    <div key={_index}>
                                        <NavItem 
                                        _note={_note} 
                                        _index={_index}
                                        selectedNoteIndex={selectedNoteIndex}
                                        selectNote = {this.selectNote} 
                                        deleteNote = {this.deleteNote}>                                   
                                        </NavItem>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            )
        }else {
            return (<div></div>)
        }
    }

    newNoteBut = () => {
        this.setState({title: null, addingNote: !this.state.addingNote})
        console.log('Button Clicked')
    }

    updateTitle = (txt) => {
        this.setState({title: txt})
        console.log('here is it', txt)
    }
    
    newNote = () => {
        console.log(this.state)
    }

    selectNote = (n, i) => {
        this.props.selectNote(n, i)
    }

    deleteNote = () => {
        console.log('delete note')
    }
}

export default withStyles(styles)(SideNav)
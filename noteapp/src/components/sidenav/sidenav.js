import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Button } from '@material-ui/core';


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
            </div>
        )
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
}

export default withStyles(styles)(SideNav)
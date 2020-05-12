import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';


class SideNav extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>Side Nav</div>
        )
    }
}

export default withStyles(styles)(SideNav)
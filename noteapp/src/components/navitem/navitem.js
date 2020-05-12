import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';


class NavItem extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>Nav Item</div>
        )
    }
}

export default withStyles(styles)(NavItem)
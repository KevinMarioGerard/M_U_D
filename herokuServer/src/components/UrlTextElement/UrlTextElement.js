import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './UrlTextElement.css';

class UrlTextElement extends Component {
    render() {
        return (
            <TextField
                id="outlined-search"
                label="Enter Url"
                type="search"
                className={"urlSearchBox " + this.props.result}
                margin="normal"
                variant="outlined"
            />
        );
    }
}

export default UrlTextElement;
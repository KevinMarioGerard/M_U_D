import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ScanButton extends Component {
    render() {
        return (
            <Button variant="outlined" 
                color="primary" 
                onClick = {this.props.onClickHandler}
                style={{color: "#2196f3", border: "2px solid #1565c0"}}
            >  
            Scan Url
            </Button>
        );
    }
}

export default ScanButton;
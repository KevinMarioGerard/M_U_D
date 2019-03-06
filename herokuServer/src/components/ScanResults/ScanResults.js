import React, { Component } from 'react';
import './ScanResults.css';

class ScanResults extends Component {
    render() {
        return (
            <div className={"scanResults " + this.props.result}>
                {this.props.flag && "The Url entered is " + this.props.result}
            </div>
        );
    }
}

export default ScanResults;
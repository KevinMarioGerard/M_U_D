import React, { Component } from 'react';
import './Startscan.css';
import Button from '@material-ui/core/Button';

class Startscan extends Component {
    constructor(props) {
      super(props);
      this.startScan = this.startScan.bind(this);
    }

    startScan() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"id": "scanPage"}, function(response) {
          console.log(response);
        });
      });
    }
    
    
    render() {
      return (
        <div>
          <Button variant="outlined" 
            color="primary" 
            onClick={() => this.startScan()} 
            style={{color: "#2196f3", border: "2px solid #1565c0"}}
          > 
          {"Scan Page"}
          </Button>
        </div>
    );
  }
}

export default Startscan;

import React, { Component } from 'react';
import './Startscan.css';
<<<<<<< HEAD
import loading from '../../img/scanning.gif';
import Button from '@material-ui/core/Button';

class Startscan extends Component {
    constructor(props) {
      super(props);
      this.state = {toggleScan: false, 
                    searchResults: false,
                    scanSuccess: 0,
                    openModal: false};
      this.startScan = this.startScan.bind(this);
      this.stopScan = this.stopScan.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.setPopOverResultState = this.setPopOverResultState.bind(this);
    }

    startScan() {
      this.setState(state => ({
        toggleScan: true,
        searchResults : false,
        scanSuccess: 0,
        openModal: false
      }));
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"id": "scanPage"}, function(response) {
          console.log(response);
        });
      });
      this.setPopOverResultState(1);
    }

    stopScan() {
      this.setState(state => ({
        toggleScan: false,
        searchResults : false,
        scanSuccess: 0,
        openModal: false
      }));
    }

    toggleModal() {
      this.setState(state => ({
        toggleScan: this.state.toggleScan,
        searchResults : this.state.searchResults,
        scanSuccess: this.state.scanSuccess,
        openModal: !this.state.openModal
      }));
    }

    setPopOverResultState(flag) {
      this.setState(state => ({
        toggleScan: false,
        searchResults : true,
        scanSuccess: flag,
        openModal: false
      }));
    }
  
    render() {
      return (
        <div>
          <Button variant="outlined" 
            color="primary" 
            onClick={() => this.startScan()} 
            style={{color: "#2196f3", border: "2px solid #1565c0"}}
          > 
          { !this.state.toggleScan && "Start Scan" }
          { this.state.toggleScan && "Stop Scan" }
          </Button>
          <br />
          <br />
          {
            this.state.toggleScan && <img src={loading} className="loading"/>
          }
          <label style={{fontSize: "20px", color: this.state.scanSuccess == 1? "green": "red"}}>
          {
            this.state.scanSuccess == 1 && "Scan Succeeded"
          }
          {
            this.state.scanSuccess == 2 && "Scan Failed"
          }
          </label>
          <br />
          <a onClick={this.toggleModal} style={{cursor: "pointer"}}>
          {
            this.state.scanSuccess != 0 && "Click here to view Results"
          }
          </a>
        </div>
    );
  }
=======

class Startscan extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
    
    render() {
        return (
            <div>
            { 
                this.state.isToggleOn && 
                <button className="startScan" onClick={(e) => this.handleClick(e)}>Start Scan</button>
            }
            </div>
        );
    }
>>>>>>> parent of 03c94bf... Cleaning branch
}

export default Startscan;

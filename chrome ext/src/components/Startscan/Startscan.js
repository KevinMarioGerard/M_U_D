import React, { Component } from 'react';
import './Startscan.css';

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
}

export default Startscan;

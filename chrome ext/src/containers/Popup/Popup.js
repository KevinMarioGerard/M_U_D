import React, { Component } from 'react';
import './Popup.css';
import Title from "../../components/Title/Title"
import ScanButton from "../../components/Startscan/Startscan";

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <Title closeicon={false}/>
            <center>
                <ScanButton />
            </center>
      </div>
    );
  }
}

export default Popup;

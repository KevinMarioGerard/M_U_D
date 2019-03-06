import './TitlePanel.css';
import React, { Component } from 'react';
import UrlElement from '../../containers/UrlElement/UrlElement'; 

class TitlePanel extends Component {
    render() {
        return (
            <div className="titlePanel">
               <div className="title">Malicious URL Detector</div>
               <div className="description">A chrome extension for scanning hyperlinks in webpages</div>
               <UrlElement />
            </div>
        );
    }
}

export default TitlePanel;
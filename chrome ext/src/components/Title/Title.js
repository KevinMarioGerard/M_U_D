import React, { Component } from 'react';
import './Title.css';
import close from '../../img/close.png';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <center>
            <img className="logoIcon" src={chrome.extension.getURL('img/logo.png')} />
            M.U.D.
            {
                this.props.closeicon && <input type="image" className="closeIcon" src={chrome.extension.getURL('img/close.png')} />
            }
        </center>
        <hr />
      </div>
    );
  }
}

export default Title;

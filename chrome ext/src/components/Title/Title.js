import React, { Component } from 'react';
import './Title.css';
<<<<<<< HEAD
=======
import logo from '../../img/logo.png';
>>>>>>> parent of 03c94bf... Cleaning branch
import close from '../../img/close.png';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <center>
<<<<<<< HEAD
            <img className="logoIcon" src={chrome.extension.getURL('img/logo.png')} />
            M.U.D.
            {
                this.props.closeicon && <input type="image" className="closeIcon" src={chrome.extension.getURL('img/close.png')} />
=======
            <img className="logoIcon" src={logo} />
            M.U.D.
            {
                this.props.closeicon && <input type="image" className="closeIcon" src={close} />
>>>>>>> parent of 03c94bf... Cleaning branch
            }
        </center>
        <hr />
      </div>
    );
  }
}

export default Title;

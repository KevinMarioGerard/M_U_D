import React, { Component } from 'react';
import './Title.css';
import logo from '../../img/logo.png';
import close from '../../img/close.png';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <center>
            <img className="logoIcon" src={logo} />
            M.U.D.
            {
                this.props.closeicon && <input type="image" className="closeIcon" src={close} />
            }
        </center>
        <hr />
      </div>
    );
  }
}

export default Title;

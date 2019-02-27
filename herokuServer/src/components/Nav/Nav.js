import './Nav.css';
import React, { Component } from 'react';
import logo from '../../logo.png';
import github from '../../github.png';

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li className="title">
                        <a href="/">
                            <img className="logoIcon" src={logo} />M.U.D.
                        </a>
                    </li>
                    <li className="github">
                        <a href="https://github.com/KevinMarioGerard/M.U.D.">
                            <img className="githubIcon" src={github} />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;
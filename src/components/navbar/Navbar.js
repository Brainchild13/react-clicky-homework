import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft">Are you one with the force?</li>
                    <li className="itemCenter"></li>
                    <li className="itemRight">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
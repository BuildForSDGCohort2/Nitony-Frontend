import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="nitony-nav">
                <div className="nitony-logo">
                    <h1>Nitony</h1>
                </div>
                <ul className="nitony-nav-list">
                    <li>Study</li>
                    <li>Mentors</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
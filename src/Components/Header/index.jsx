import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
    <div className="nitony-header-wrapper">
        <div className="nitony-header-container">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div className="img-wrapper">
			{/* <img src="https://stripe.com/img/v3/home/app-illustrations/catawiki.svg" alt=""/> */}
		</div>
		<div className="nitony-header-content">
			<h1>Better grades start here</h1>
            <h3>Instant online Exam revision - all exams, all subjects, anytime, anywhere</h3>
			<p>
				Stripe is the best software platform for running an internet business.
				We handle billions of dollars every year for forward-thinking businesses
				around the world.
			</p>
            <button>Get Started</button>
		</div>
        </div>
        );
    }
}

export default Header;
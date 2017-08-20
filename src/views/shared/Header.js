import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
	render() {
		return (
			<header className="site-header">
				<h6 className="site-title">Ben Hutchinson Photography</h6>
				<Nav />
			</header>
		);
	}
}

export default Header;
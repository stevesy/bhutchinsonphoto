import React from 'react';

class Footer extends React.Component {
	render() {
		const year = new Date().getFullYear();
		return (
			<footer className="site-footer">
				<ul>
					<li>&copy; { year } Ben Hutchinson</li>
					<li><a href="mailto:bhutchinsonphoto@gmail.com">bhutchinsonphoto@gmail.com</a></li>
					<li><a href="tel:6089638783">608.963.8783</a></li>
				</ul>
			</footer>
		);
	}
}

export default Footer;
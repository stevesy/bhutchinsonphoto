import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Nav extends React.Component {
	render() {
		return (
			<nav className="site-nav">
				<ul className="nav">
					<li className="nav-item">
						<NavLink to="/portraits" aria-haspopup="true" activeClassName="active">
							Portraits
						</NavLink>
						<ul className="subnav">
							<li>
								<Link to="/portraits">
									Page 1
								</Link>
							</li>
							<li>
								<Link to="/portraits-2">
									Page 2
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<NavLink to="/models" aria-haspopup="true" activeClassName="active">
							Models
						</NavLink>
						<ul className="subnav">
							<li>
								<Link to="/models">
									Page 1
								</Link>
							</li>
							<li>
								<Link to="/models-2">
									Page 2
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<NavLink to="/business" activeClassName="active">
							Business
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
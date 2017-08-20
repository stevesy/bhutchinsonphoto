import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles/app.css';

import Header from './views/shared/Header';
import Footer from './views/shared/Footer';

import Portraits from './views/home/Portraits';
import Portraits2 from './views/home/Portraits2';
import Models from './views/home/Models';
import Models2 from './views/home/Models2';
import Business from './views/home/Business';

class App extends React.Component {
	render() {
		return (
			<div className="page">
				<Header />
				<main className="site-main">
					<Switch>
						<Route exact path="/portraits" component={ Portraits } />
						<Route exact path="/portraits/2" component={ Portraits2 } />
						<Route exact path="/models" component={ Models } />
						<Route exact path="/models/2" component={ Models2 } />
						<Route exact path="/business" component={ Business } />
						
						<Redirect exact path="/" to="/portraits" />
						<Redirect exact path="/portraits-2" to="/portraits/2" />
						<Redirect exact path="/models-2" to="/models/2" />
					</Switch>
				</main>
				<Footer />
			</div>
		);
	}
};

export default App;
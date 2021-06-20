import React from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';
import LandingPage from './containers/LandingPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Compare from './containers/Compare';
import Favourites from './containers/Favourites';
import Navigation from './components/Navigation';

function App() {
	const { t } = useTranslation();

	return (
		<div className='App'>
			<Router>
				<Navigation />
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route path='/compare' component={Compare} />
					<Route path='/favourites' component={Favourites} />
				</Switch>
			</Router>
			{/* <p>{t('msg.worldGreeting')}</p> */}
		</div>
	);
}

export default App;

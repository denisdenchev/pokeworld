import './App.scss';
import { useTranslation } from 'react-i18next';
import LandingPage from './containers/LandingPage';

function App() {
	const { t } = useTranslation();
	return (
		<div className='App'>
			{/* <p>{t('msg.worldGreeting')}</p> */}
			<LandingPage />
		</div>
	);
}

export default App;

import { h, Component, createContext } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import './assets/styles/global.css';

// Routes
import Home from './routes/home';
import Form from './routes/form';
import FormSuccess from './routes/formSuccess';

// Components
import Header from './components/header';
import Footer from './components/footer';
import { Dialog } from './components/dialog';
import { PWAPrompt } from './components/pwaPrompt';

// Images
import VcdLogo from './assets/svg/logo.svg';
import VcdBadge from './assets/svg/badge.svg';

export const Action = createContext({})

export default class App extends Component {

	state = {
		results: {},
		isHomepage: true,
		isPopupOpen: false,
		popupData: {},
	}

  targetElement = null;
	
	handleRoute = e => {
		this.currentUrl = e.url;
		this.setState({ isHomepage: e.url.replace(/\?.*/g, "") === "/" });
	};

	setPopupNumbers = (e, popupData) => {
		e.preventDefault();

		this.setState({
			popupData,
			isPopupOpen: true
		})
	}

	closePopup = (e) => {
		if (e.currentTarget === e.target) {      
			this.setState({ isPopupOpen: false })
		}
	}

  closePopupFromButton = (e) => {
    this.setState({ isPopupOpen: false })
  }

	componentDidMount() {

    this.targetElement = document.querySelector('#popupDialog');

		fetch(`${process.env.PREACT_APP_DATA_SOURCE}?c=${Math.random().toString(36).split('.')[1]}`)
			.then(r => r.json())
			.then(json => {
				this.setState({
					results: json,
					resultBkp: json
				});
			});  
	}

	componentDidUpdate() {
		const { isPopupOpen } = this.state;
    isPopupOpen ? disableBodyScroll(this.targetElement) : enableBodyScroll(this.targetElement);
	}

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

	render(props, { isHomepage, results, popupData, isPopupOpen }) {
		return (
			<Action.Provider value={{setPopupNumbers: this.setPopupNumbers}}>
        <Header />
				<div id="app" class="relative">
          <div class="max-w-screen-lg mx-auto">
            <VcdLogo class="w-4/6 md:w-1/2 mx-auto my-10 main-logo" />
          </div>
					<Router onChange={this.handleRoute}>
						<Home path="/" results={results} />
						<Form path="/form" />
						<FormSuccess path="/form/success" />
					</Router>       
				</div>
        <Footer />
				<Dialog isOpen={isPopupOpen} closePopup={this.closePopup} closePopupFromButton={this.closePopupFromButton} {...popupData} />
				<PWAPrompt />
			</Action.Provider>
		);
	}
}

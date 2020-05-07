import { Component, Fragment } from 'preact';

// Images
import InstaIcon from '../assets/svg/icon_insta.svg';
import MailIcon from '../assets/svg/icon_mail.svg';

// gtag
import gtagEvent from '../utils/gtagEvents.js';

export default class Header extends Component {  
  
  componentDidMount(){
    
  }
  
  render(){
    return (
      <Fragment>
        <div class="w-full py-2 px-5 md:px-10 bg-vcd-azzurro flex flex-wrap align-items-center justify-center md:justify-end vcd-header">
          <a href="https://www.instagram.com/cadore_delivery/"
            target="_blank"
            rel="noopener noreferrer w-full"
            class="text-xs text-white md:w-auto text-center mb-1 md:mb-0"
            onClick={() => { gtagEvent('custom_click','header','click on instagram profile link') }}
          >cadore_delivery
            <InstaIcon className='icon-insta' />
          </a>
          <span class="hidden md:block text-white mr-2">|</span>
          <a href="mailto:info@cadore.delivery"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-white w-full md:w-auto text-center"
            onClick={() => { gtagEvent('custom_click','header','click on email link') }}
          >info@cadore.delivery
            <MailIcon className='icon-mail' />
          </a>
        </div>      
      </Fragment>
    );
  }

	
};

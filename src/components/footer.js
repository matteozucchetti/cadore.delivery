import { Component, Fragment } from 'preact';

// Images
import IconCuore from '../assets/svg/cuore.svg';
import Montagna1 from '../assets/svg/montagne1.svg';
import Montagna2 from '../assets/svg/montagne2.svg';

// gtag
import gtagEvent from '../utils/gtagEvents.js';

export default class Footer extends Component {  
  
  componentDidMount(){
    const script1 = document.createElement("script");
    script1.innerHTML = `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`;
    script1.async = true;
    const footer = this.base;
    footer.appendChild(script1);
  }
  
  render(){
    return (
      <Fragment>
        <div class="w-full text-center vcd-footer py-10 px-5 bg-vcd-rosa border-b-8 border-vcd-azzurro relative">

          <p class="mb-5 text-white">Se la nostra app ti piace, fai una donazione per supportarci!</p>

          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="JDTBJFDUYHDB6" />
          <img alt="" border="0" src="https://www.paypal.com/it_IT/i/scr/pixel.gif" width="1" height="1" />
          <button class="vcd-button vcd-button--white w-full text-center md:w-auto mb-10" title="Fai una donazione con il pulsante PayPal!" alt="Fai una donazione con il pulsante PayPal" onClick={() => { gtagEvent('custom_click','footer','click on dona') }} type="submit">dona</button>
          </form>

          <p class="mb-5 text-white">
            Developed with <IconCuore class="icon-heart" /> by
            <a 
              class="font-semibold"
              onClick={() => { gtagEvent('custom_click','footer','click on matteo') }}
              href={process.env.PREACT_APP_DEV_LINK}
              rel="noopener"
              rel="noreferrer"
              target="_blank"
            > {process.env.PREACT_APP_DEV_NAME}</a>
            , design by 
            <a
              class="font-semibold"
              onClick={() => { gtagEvent('custom_click','footer','click on francesca') }}
              href="https://www.linkedin.com/in/francesca-da-forno-55312a119/"
              rel="noopener"
              rel="noreferrer"
              target="_blank"
            > Francesca Da Forno</a>
          </p>
          <p class="mb-5 text-white">
            Special thanks to <span class="font-semibold">Matteo Bernardi</span>
          </p>
          <a href="https://github.com/tomma5o/domicilioBoilerplate"
            target="_blank"
            rel="noopener noreferrer"
            class="mb-5 text-xs block text-white"
            onClick={() => { gtagEvent('custom_click','footer','click on github') }}
          >Based on <span class="underline">this</span> GitHub project</a>
          <p class="text-center text-white">
            <a href="https://www.iubenda.com/privacy-policy/19385130" class="iubenda-white iubenda-embed mx-2" title="Privacy Policy ">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/19385130/cookie-policy" class="iubenda-white iubenda-embed mx-2" title="Cookie Policy ">Cookie Policy</a>
          </p>

          <Montagna1 className="hidden lg:block deco deco--left" />
          <Montagna2 className="hidden lg:block deco deco--right" />

        </div>      
      </Fragment>
    );
  }

	
};

import { Fragment } from "preact";

// Utils
import cleanUrls from '../utils/cleanUrls'

// gtag
import gtagEvent from '../utils/gtagEvents.js';

// Images
import MailIcon from '../assets/svg/icon_mail.svg';
import WebsiteIcon from '../assets/svg/icon_website.svg';
import FacebookIcon from '../assets/svg/icon_facebook.svg';
import InstaIcon from '../assets/svg/icon_insta.svg';
import TelIcon from '../assets/svg/icon_tel.svg';

function Tel({ tel, name }) {
   const isArrayOfTel = Array.isArray(tel);

   return (isArrayOfTel
      ? tel.map((telNumber, i) => (
         <a href={`tel:${telNumber}`} onClick={() => { gtagEvent('custom_click', 'dialog - ' + name, 'tel number') }} class="inline-block rounded-lg text-sm">
            <span>{telNumber}</span>
            {tel.length !== i + 1 && <span class="mx-2">-</span>}
         </a>
      ))
      : <a href={`tel:${tel}`} onClick={() => { gtagEvent('custom_click', 'dialog - ' + name, 'tel number') }} class="inline-block rounded-lg text-sm">
         {tel}
      </a>
   );
}

export const D_Contacts = ({ tel, mail, site, name, insta, facebook }) => {
   return (
      <Fragment>
         <div class="cd-dialogBox border-none">
            <div class="w-full">
               <h3 class="mt-4 mb-2">Contatti</h3>
               <div class="mb-2 mt-4 text-sm flex flex-wrap justify-center items-start">
                  {tel && (
                     <div class="text-center flex-auto md:flex-1 mb-2">
                        <TelIcon
                           class="w-4 h-4 mx-auto mb-2 contact-icon"
                           role="img"
                           aria-label="telephone"
                        />
                        <Tel {...{ tel, name }} />
                     </div>
                  )}
                  {site && (
                     <div class="text-center w-full md:w-auto flex-auto md:flex-1 mb-2 px-2">
                        <a href={site} onClick={() => { gtagEvent('custom_click', 'dialog - website', name) }} target="_blank">
                           <WebsiteIcon
                              class="w-4 h-4 mx-auto mb-2 contact-icon"
                              role="img"
                              aria-label="see the site"
                           />
                           <span>{cleanUrls(site)}</span>
                        </a>
                     </div>
                  )}
                  {mail && (
                     <div class="text-center w-full md:w-auto flex-auto md:flex-1 mb-2 px-2">
                        <a href={`mailto:${mail}`} onClick={() => { gtagEvent('custom_click', 'dialog - email', name) }}>
                           <MailIcon
                              class="w-4 h-4 mx-auto mb-2 contact-icon"
                              role="img"
                              aria-label="email"
                           />
                           <span>{mail}</span>
                        </a>
                     </div>
                  )}
                  {insta && (
                     <div class="text-center w-full md:w-auto flex-auto md:flex-1 mb-2 px-2">
                        <a href={insta} target="_blank" onClick={() => { gtagEvent('custom_click', 'dialog - insta', name) }}>
                           <InstaIcon
                              class="w-4 h-4 mx-auto mb-2 contact-icon"
                              role="img"
                              aria-label="instagram"
                           />
                           <span>{name}</span>
                        </a>
                     </div>
                  )}
                  {facebook && (
                     <div class="text-center w-full md:w-auto flex-auto md:flex-1 mb-2 px-2">
                        <a href={facebook} target="_blank" onClick={() => { gtagEvent('custom_click', 'dialog - facebook', name) }}>
                           <FacebookIcon
                              class="w-4 h-4 mx-auto mb-2 contact-icon"
                              role="img"
                              aria-label="instagram"
                           />
                           <span>{name}</span>
                        </a>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </Fragment>
   );
}
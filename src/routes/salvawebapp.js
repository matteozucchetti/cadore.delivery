import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

// Images
import ImageiOs from '../assets/images/cd_how_ios.png';
import ImageAndroid from '../assets/images/cd_how_android.png';

// gtag
import gtagEvent from '../utils/gtagEvents.js';

export default function SalvaWebApp() {
   return (
      <Fragment>
         <div class="text-center max-w-screen-sm mx-auto relative px-5">

            <h2 className="text-center font-light text-cd-giallo tracking-wide form-heading my-5 md:my-10">
               <span class="bg-white inline-block relative z-10 px-10 uppercase">COME SALVARE LA WEB APP</span>
            </h2>

            <p class="mb-5">Vuoi <b>cadore.delivery</b> nella schermata home del tuo smartphone per accedere più facilmente?</p>

            <p class="mb-5">Ecco le istruzioni in base al tuo <b>sistema operativo</b>:</p>

         </div>

         <div class="text-center max-w-screen-lg mx-auto relative pb-5 md:px-5 flex">

            <div class="w-full md:w-1/2 bg-cd-verde text-center text-white pb-10">
               <img src={ImageiOs} />
               <p class="mb-5 text-xl md:text-2xl font-bold px-3 mt-5">iOs</p>
               <p class="mb-5 text-sm md:text-base font-light px-3 mt-5"><b class="font-bold">1.</b><br />Apri il sito nel tuo browser (Safari, Chrome)</p>
               <p class="mb-5 text-sm md:text-base font-light px-3"><b class="font-bold">2.</b><br />Fai tap sul pulsante condividi in basso</p>
               <p class="mb-5 text-sm md:text-base font-light px-3"><b class="font-bold">3.</b><br />Seleziona "Aggiungi alla schermata Home"</p>
            </div>
            <div class="w-full md:w-1/2 bg-cd-rosa text-center text-white pb-10">
               <img src={ImageAndroid} />
               <p class="mb-5 text-xl md:text-2xl font-bold px-3 mt-5">Android</p>
               <p class="mb-5 text-sm md:text-base font-light px-3 mt-5"><b class="font-bold">1.</b><br />Apri il sito nel tuo browser (Internet, Chrome)</p>
               <p class="mb-5 text-sm md:text-base font-light px-3"><b class="font-bold">2.</b><br />Fai tap sull'icona delle opzioni in alto (tre puntini)</p>
               <p class="mb-5 text-sm md:text-base font-light px-3"><b class="font-bold">3.</b><br />Seleziona "Aggiungi a schermata Home"</p>
            </div>

         </div>

         <div class="text-center max-w-screen-sm mx-auto relative pb-10 px-5">

            <Link href="/">
               <button class="cd-button w-full text-center md:w-auto my-10">Torna alla homepage</button>
            </Link>

         </div>
      </Fragment>
   );
}

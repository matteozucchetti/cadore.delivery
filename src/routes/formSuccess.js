import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

// Images
import Deco from '../assets/svg/decoration.svg';

// gtag
import gtagEvent from '../utils/gtagEvents.js';

export default function FormSuccess() {
	return (
    <Fragment>
  		<div class="text-center max-w-screen-sm mx-auto relative pb-10  px-5">

        <h2 className="text-center font-light text-cd-giallo tracking-wide my-5 md:my-10">
          <span class="bg-white inline-block relative z-10 px-10 uppercase">grazie per aver aggiunto la tua attività</span>
        </h2>

        <p class="mb-5"><b>Abbiamo preso in carico la tua richiesta!</b><br />Normalmente la fase di approvazione richiede 24/48 ore.</p>

        <p class="mb-5">Non dimenticare di <b>condividere con i tuoi amici quest'app</b> per fare in modo che tutte le piccole attività e non, in Cadore, siano presenti!</p>

        <Link href="/">
          <button
            class="cd-button cd-button--giallo w-full text-center md:w-auto my-10">
            torna alla homepage
          </button>
        </Link>

  		</div>
    </Fragment>
	);
}

import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

// Images
import LeftArrow from '../assets/svg/left_arrow.svg';
import Deco from '../assets/svg/decoration.svg';

// gtag
import gtagEvent from '../utils/gtagEvents.js';

export default function Form() {
	return (
    <Fragment>
  		<div class="max-w-screen-lg mx-auto px-5">

        <Link onClick={() => { gtagEvent('custom_click','form','click on torna indietro') }} class="text-vcd-rosa text-xs md:text-sm" href="/"><LeftArrow />torna indietro</Link>

        <h2 className="text-center font-light text-vcd-rosa tracking-wide form-heading my-5 md:my-10">
          <span class="bg-white inline-block relative z-10 px-10 uppercase">AGGIUNGI LA TUA ATTIVITÀ</span>
        </h2>
        <p class="mb-5 text-center"><b>Compila il form</b> qui sotto per <b>inviare la richiesta</b> e aggiungere la tua attività</p>
  			<form class="mt-10" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/form/success/">
        
  				<input type="hidden" aria-hidden="true" name="form-name" value="contact" />
          <input type="hidden" aria-hidden="true" name="bot-field" />


          <div class="flex flex-wrap">

            <div class="w-full md:w-1/2 px-2 mb-5">
              <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" required type="text" name="name" placeholder="Nome attività" />
            </div>

            <div class="w-full md:w-1/2 px-2 mb-5">
              <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="tel" inputmode="numeric" name="telephone" placeholder="Numero di telefono" />
            </div>

          </div>

          <div class="flex flex-wrap border-b-2 border-vcd-rosa">

            <div class="w-full md:w-1/2 px-2 mb-5">
              <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" required type="text" name="mail" placeholder="E-mail" />
            </div>

            <div class="w-full md:w-1/2 px-2 mb-10">
              <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="site" placeholder="Sito Web" />
            </div>

          </div>

          <div class="flex flex-wrap border-b-2 border-vcd-rosa mt-10">

            <div class="w-full px-2 mb-10">
              <label>Dove consegni? (specifica qui i comuni in cui puoi effettuare le consegne)
                <textarea class="bg-white border border-gray-500 py-2 px-4 mt-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" required type="text" name="delivery_city" placeholder="es. Edolo, Ponte di Legno, Darfo Boario Terme, Lovere" />
              </label>
            </div>

          </div>

          <div class="flex flex-wrap border-b-2 border-vcd-rosa mt-10">

            <div class="w-full px-2 mb-10">
              <label class="">In quali giorni è attivo il servizio?
                <div class="mt-4 text-xs flex justify-start items-center mx-auto flex-wrap">

                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse day-label">Lunedì
                      <input class="custom-checkbox" type="checkbox" name="delivery_day_Lun" />
                    </label>
                  </div>

                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse day-label">Martedì
                      <input class="custom-checkbox" type="checkbox" name="delivery_day_Mar" />
                    </label>
                  </div>

                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse day-label">Mercoledì
                      <input class="custom-checkbox" type="checkbox" name="delivery_day_Mer" />
                    </label>
                  </div>

                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse day-label">Giovedì
                      <input class="custom-checkbox" type="checkbox" name="delivery_day_Gio" />
                    </label>
                  </div>

                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse day-label">Venerdì
                      <input class="custom-checkbox" type="checkbox" name="delivery_day_Ven" />
                    </label>
                  </div>

                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse day-label">Sabato
                      <input class="custom-checkbox" type="checkbox" name="delivery_day_Sab" />
                    </label>
                  </div>

                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse day-label">Domenica
                      <input class="custom-checkbox" type="checkbox" name="delivery_day_Dom" />
                    </label>
                  </div>

                </div>
              </label>
            </div>

          </div>

          <div class="flex flex-wrap border-b-2 border-vcd-rosa mt-10">

            <div class="w-auto px-2 mb-10">
              <label>Costo consegna
                <input class="bg-white border border-gray-500 py-2 px-4 mt-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="delivery_fee" placeholder="es. 2€" />
              </label>
            </div>
            <div class="w-auto px-2 mb-10">
              <label>Ordine minimo
                <input class="bg-white border border-gray-500 py-2 px-4 mt-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="min_order" placeholder="es. 10€" />
              </label>
            </div>

          </div>

          <div class="flex flex-wrap border-b-2 border-vcd-rosa mt-10">

            <div class="w-full px-2 mb-10">
              <label class="">Saresti interessato a mantenere attivo il servizio anche dopo il periodo di lockdown dovuto al COVID-19?
                <div class="mt-4 text-xs flex justify-start items-center mx-auto flex-wrap">

                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse covid-label">Si
                      <input required class="custom-radio" type="radio" name="post_covid" value="si" />
                    </label>
                  </div>
                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse covid-label">No
                      <input required class="custom-radio" type="radio" name="post_covid" value="no" />
                    </label>
                  </div>
                  <div class="mr-5 mb-2 md:mb-0">
                    <label class="flex justify-center items-center flex-col-reverse covid-label">Forse
                      <input required class="custom-radio" type="radio" name="post_covid" value="forse" />
                    </label>
                  </div>                
                </div>
              </label>
            </div>

          </div>

          <div class="flex flex-wrap mt-10">

            <div class="w-full px-2 mb-10">
              <label class="">Note
                <textarea class="bg-white border border-gray-500 py-2 px-4 mt-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="note" style="height:150px" placeholder="es. Domenica solo a pranzo" />
              </label>
            </div>

          </div>

          <div class="flex flex-wrap">

            <div class="w-full text-center px-2 mb-10">
              <button class="vcd-button w-full text-center md:w-auto" type="submit">invia richiesta</button>
            </div>

          </div>

  			</form>        

  		</div>
      <Deco className="hidden lg:block deco deco--left" />
      <Deco className="hidden lg:block deco deco--right" />
    </Fragment>
	);
}

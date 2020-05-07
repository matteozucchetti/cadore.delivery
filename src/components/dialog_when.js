import { Fragment } from "preact";

// Images
import CheckIcon from '../assets/svg/icon_check.svg';

export const D_When = ({when}) => {

	return (
		<Fragment>
      <div class="vcd-dialogBox">
        <div class="w-full">
    			<h3 class="mt-4 mb-2">Giorni</h3>
    			<div class="mb-2 mt-4 text-xs flex justify-center items-center max-w-screen-sm mx-auto flex-wrap">

            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.lun === 'on' || when.lun === 1 || when.lun === true
                ? "active"
                : "inactive"
              }`} />
              Lunedì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.mar === 'on' || when.mar === 1 || when.mar === true
                ? "active"
                : "inactive"
              }`} />
              Martedì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.mer === 'on' || when.mer === 1 || when.mer === true
                ? "active"
                : "inactive"
              }`} />
              Mercoledì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.gio === 'on' || when.gio === 1 || when.gio === true
                ? "active"
                : "inactive"
              }`} />
              Giovedì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.ven === 'on' || when.ven === 1 || when.ven === true
                ? "active"
                : "inactive"
              }`} />
              Venerdì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.sab === 'on' || when.sab === 1 || when.sab === true
                ? "active"
                : "inactive"
              }`} />
              Sabato
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.dom === 'on' || when.dom === 1 || when.dom === true
                ? "active"
                : "inactive"
              }`} />
              Domenica
            </div>

    			</div>
        </div>
      </div>
		</Fragment>
	);
};

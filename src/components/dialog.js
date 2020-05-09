// Components
import { D_Contacts } from './dialog_contacts';
import { D_Services } from './dialog_services';
import { D_Payments } from './dialog_payments';
import { D_Notes } from './dialog_notes';
import { D_Where } from './dialog_where';
import { D_When } from './dialog_when';
import { D_DeliveryFee } from './dialog_delivery_fee.js';
import { D_MinOrder } from './dialog_min_order.js';

// Images
import CloseIcon from '../assets/svg/icon_close.svg';

export const Dialog = ({
	isOpen,
	closePopup,
  closePopupFromButton,
	name,
	tel,
	mail,
	site,
	services,
	payments,
  where,
  when,
	note,
  min_order,
  delivery_fee
}) => {
	return (
		<dialog 
			class="fixed inset-x-0 top-0 backdrop w-screen h-screen z-20 cdDialog overflow-y-scroll overflow-x-hidden"
			style={{display: isOpen ? "initial" : "none"}}
      onClick={closePopup}
      id="popupDialog"
		>
			<div
				class="w-full md:w-5/6 max-w-screen-lg shadow-lg bg-white cdDialog-inner mb-10 pb-10 border-b-8 border-cd-giallo"
			>
				<div class="flex justify-start md:justify-center items-center bg-cd-verde p-3 md:p-6 relative">

					<h2 class="text-2xl font-bold text-white pr-10 md:pr-0 leading-tight">{name}</h2>

					<button
						class="cd-closeButton z-30"
            onClick={closePopupFromButton}
					><CloseIcon /></button>

				</div>

        <div class="px-3 md:px-6 relative">

          {where && <D_Where {...{where}} />}
          {when && <D_When {...{when}} />}
          {
            (delivery_fee || min_order)
            ?
            <div class="cd-dialogBox justify-center items-center">
              {delivery_fee && <div class="px-5"><D_DeliveryFee {...{delivery_fee}} /></div>}
              {min_order && <div class="px-5"><D_MinOrder {...{min_order}} /></div>}
            </div>
            : null
          }
          {note && <D_Notes {...{note}} />}
          <D_Contacts {...{tel, mail, site, name}} />

          {/*
            {payments && <D_Payments {...{payments}} />}
            {services && <D_Services {...{services}} />}
          */}

			 </div>
      </div>
		</dialog>
	);
};

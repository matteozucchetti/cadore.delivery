import { useContext } from 'preact/hooks';

// Actions
import { Action } from '../index';

// gtag
import gtagEvent from '../utils/gtagEvents.js';

// Images
import IconInfo from '../assets/svg/icon_info.svg';
import IconTel from '../assets/svg/icon_tel.svg';

export const ListItem = (props) => {
	const { name, tel, site, mail, payments, services, note, where, when, newEntry } = props;

	const action = useContext(Action);
	const isInfoVisible = Boolean(Array.isArray(tel) || site || mail || payments || services || note || Array.isArray(where));

  const getDay = () => {
    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "dom";
    weekday[1] = "lun";
    weekday[2] = "mar";
    weekday[3] = "mer";
    weekday[4] = "gio";
    weekday[5] = "ven";
    weekday[6] = "sab";

    let n = weekday[d.getDay()];
    return n
  }


  const isOpenToday = () => {
    let today = getDay()
    return Boolean(when[today])
  }

	return (
		<article class={`relative cursor-pointer flex justify-center items-stretch w-full my-5 ${isOpenToday() ? "" : "closed-today"}`}>

      <div onClick={(e) => {gtagEvent('custom_click','listing - '+name,'shop name'), action.setPopupNumbers(e, props)}} class="flex flex-auto justify-start items-center border border-vcd-black rounded px-2 py-3 md:p-4">
        <span class="text-sm md:text-base">{name}</span>
      </div>

      {isInfoVisible && 
  			<div onClick={(e) => {gtagEvent('custom_click','listing - '+name,'info icon'), action.setPopupNumbers(e, props)}} class="vdc-infoButtons vdc-infoButtons--info">  				
  					<span
  						role="img"
  						aria-label="more info"
  					><IconInfo width="100%" fill="#fff" />
  					</span>
        </div>
      }

      {tel && (
        <div class="vdc-infoButtons vdc-infoButtons--tel">
					<a href={`tel:${tel}`} onClick={
            (e) => {gtagEvent('custom_click','listing - '+name,'tel icon'), tel.length > 1 && action.setPopupNumbers(e, props)}
          }>
						<span
							role="img"
							aria-label="telephone"
						><IconTel width="100%" fill="#fff" />
						</span>
					</a>
			 </div>
      )}

    </article>
	);
};

import { Fragment } from "preact";

export const D_DeliveryFee = ({delivery_fee}) => {
	return (
    <Fragment>
      <div class="">
  			<h3 class="mt-4 mb-2">Costo consegna</h3>
  			<div class="mb-2 text-sm">
          <p>{delivery_fee}</p>
  			</div>
      </div>
		</Fragment>
	);
};

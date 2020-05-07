import { Fragment } from "preact";

export const D_Where = ({where}) => {

  let length = where.length;

	return (
		<Fragment>
      <div class="vcd-dialogBox">
        <div class="w-full">
    			<h3 class="mt-4 mb-2">Consegna a</h3>
    			<div class="mb-2 text-sm">
             <p>
                {
                  where.map((value, index) => {
                  return ( index === length - 1
                    ? <span class="capitalize" key={index}>{value}</span>
                    : <span class="capitalize" key={index}>{value}, </span>                
                  )
                })
                }
             </p>
    			</div>
        </div>
      </div>
		</Fragment>
	);
};

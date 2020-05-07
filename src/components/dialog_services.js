import { Fragment } from "preact";

// Utils
import getBrandColor from '../utils/getBrandColor';

export const D_Services = ({services}) => {
	
	return (
		<Fragment>
      <div class="vcd-dialogBox">
        <div class="w-full">
    			<h3 class="mt-4 mb-2">Puoi trovarci anche su</h3>
    			<div>
    				{services.map((service) => {
    					const colors = getBrandColor(service);

    					return (
    						<span
    							class="inline-block py-1 px-3 mb-2 mr-2 text-sm rounded-full font-semibold text-sm"
    							target="_blank"
    							rel="noopener noreferrer"
    							style={colors}
    						>
    							{service}
    						</span>
    					);
    				})}
    			</div>
        </div>
      </div>
		</Fragment>
	);
};

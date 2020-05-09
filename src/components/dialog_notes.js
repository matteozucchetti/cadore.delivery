import { Fragment } from "preact";

export const D_Notes = ({note}) => {
	return (
		<Fragment>
      <div class="cd-dialogBox">
        <div class="w-full">
    			<h3 class="mt-4 mb-2">Note</h3>
    			<div class="mb-2 text-sm">
            <p>{note}</p>
    			</div>
        </div>
      </div>
		</Fragment>
	);
};

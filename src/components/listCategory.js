import { ListItem } from './lisItem';

export const ListCategory = ({ name = '', category = {}}) => {

	return (
		<section id={name.replace(' ', '_')} className="">
			<h2 className="text-center font-semibold category-heading my-10">
        <span class="bg-white inline-block relative z-10 px-10 lowercase">{name}</span>
			</h2>
			<div>
				{
          category.data
					.map(props => (
            (!props.hidden && <ListItem key={props.tel} {...props} />)            
					))
				}
			</div>
		</section>
	);
};

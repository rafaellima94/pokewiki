import { forwardRef } from 'react';
import { Form } from 'semantic-ui-react';

type Props = {
	filterPokemon: () => void;
};

const SearchForm = forwardRef<HTMLInputElement, Props>(({ filterPokemon }, ref) => {
	return (
		<Form onSubmit={filterPokemon}>
			<Form.Group>
				<input
					placeholder='Name'
					name='name'
					ref={ref}
				/>
				<Form.Button content='Search' />
			</Form.Group>
		</Form>
	)
});

export default SearchForm;
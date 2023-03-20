import { FC } from 'react';
import { Menu } from 'semantic-ui-react';
import pokemonLogo from 'assets/images/pokemon_logo.png';

const Header: FC = () => {
	return (
		<Menu fixed='top' size='massive' style={{ height: 80 }}>
			<Menu.Item>
				<img alt="pokemon logo" src={pokemonLogo} />
			</Menu.Item>
		</Menu>
	)
}

export default Header;
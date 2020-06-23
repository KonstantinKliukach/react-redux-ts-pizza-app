import React from 'react';
import { useLocation } from 'react-router-dom';
import { Flex } from 'rebass';

import { ReactComponent as ReactCoffee } from 'assets/icons/menu/coffee/coffee.svg';
import { ReactComponent as ReactPizza } from 'assets/icons/menu/pizza/pizza.svg';
import { ReactComponent as ReactBurger } from 'assets/icons/menu/burger/burger.svg';
import { ReactComponent as ReactBeer } from 'assets/icons/menu/beer/beer.svg';
import MenuItem from './menuItem';

interface MenuItemList {
  id: number,
  name: string,
  path: string,
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
}

const menuItems: MenuItemList[] = [
  {
    id: 0,
    name: 'Pizza',
    path: '/',
    logo: ReactPizza,
  },
  {
    id: 2,
    name: 'Cold drinks',
    path: '/drinks',
    logo: ReactBeer,
  },
  {
    id: 3,
    name: 'Burgers',
    path: '/burgers',
    logo: ReactBurger,
  },
  {
    id: 4,
    name: 'Hot drinks',
    path: '/coffee',
    logo: ReactCoffee,
  },
];

const Menu: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <Flex
      p='8px'
      as='nav'
      flexDirection='column'
      flexGrow={1}
      maxWidth={'335px'}
      sx={{
        position: 'sticky',
      }}
    >
      {
        menuItems.map((menuItem) => <MenuItem
          key={menuItem.id}
          path={menuItem.path}
          name={menuItem.name}
          active={pathname === menuItem.path}
          >
            <menuItem.logo width='20px' height='20px' fillOpacity={1} fill={'var(--text-color)'} />
          </MenuItem>)
      }
    </Flex>
  );
};

export default Menu;

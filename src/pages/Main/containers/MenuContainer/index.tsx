import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const MenuContainer: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
    >
      <BottomNavigationAction label="Propiedades" icon={<HomeIcon />} />

      <BottomNavigationAction
        label="Agregar propiedad"
        icon={<AddLocationIcon />}
      />
    </BottomNavigation>
  );
};

export default MenuContainer;

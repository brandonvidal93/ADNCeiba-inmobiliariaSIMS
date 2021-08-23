import React, { useContext } from 'react';

// Material
import Fab from '@material-ui/core/Fab';

// Context
import { DialogContext } from 'pages/Main/context/DialogContext';

// Icons
import AddIcon from '@material-ui/icons/Add';

// Styles
import { useStyles } from './styles';

const MenuContainer: React.FC = () => {
  const classes = useStyles();
  const {
    mutations: { toggleDialog },
  } = useContext(DialogContext);

  const handleClickOpen = () => {
    toggleDialog(true);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon onClick={handleClickOpen} />
      </Fab>
    </div>
  );
};

export default MenuContainer;

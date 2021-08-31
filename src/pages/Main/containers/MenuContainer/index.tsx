import React, { useContext } from 'react';

// Material
import Fab from '@material-ui/core/Fab';

// Context
import { DialogContext } from 'pages/Main/context/DialogContext';

// Components
import DialogComponent from 'pages/Main/components/Dialog';
import AddForm from 'pages/Main/components/AddForm';

// Icons
import AddIcon from '@material-ui/icons/Add';

// Styles
import { useStyles } from './styles';

const MenuContainer: React.FC = () => {
  const classes = useStyles();
  const {
    data: { isOpen },
    mutations: { toggleDialog },
  } = useContext(DialogContext);

  const handleClickOpen = () => {
    toggleDialog(true);
  };

  return (
    <>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon onClick={handleClickOpen} />
      </Fab>
      <DialogComponent isOpen={isOpen} toggleDialog={toggleDialog}>
        <AddForm />
      </DialogComponent>
    </>
  );
};

export default MenuContainer;

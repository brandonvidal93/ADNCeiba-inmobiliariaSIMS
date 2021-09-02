import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { DialogContext } from 'pages/Main/context/DialogContext';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Styles
import { useStyles } from './styles';

export interface DialogContextProps {
  isOpen: boolean;
  children: React.ReactNode;
  toggleDialog: (open: boolean) => void;
}

const DialogComponent: React.FC<DialogContextProps> = ({
  isOpen,
  children,
  toggleDialog,
}) => {
  const {
    data: { isEditMode },
    mutations: { toggleEditMode },
  } = useContext(DialogContext);
  const classes = useStyles();

  const handleClose = () => {
    toggleDialog(false);
    toggleEditMode(false);
  };

  return (
    <div>
      <Dialog fullScreen open={isOpen} onClose={handleClose}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {!isEditMode ? 'Registra propiedad' : 'Actualiza información'}
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  );
};

export default DialogComponent;

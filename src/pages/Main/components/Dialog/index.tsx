import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Styles
import { useStyles } from './styles';

export interface DialogContextProps {
  isOpen: boolean;
  toggleDialog: (open: boolean) => void;
}

const DialogComponent: React.FC<DialogContextProps> = ({
  isOpen,
  toggleDialog,
}) => {
  console.log(`IsOpen from Dialog ${isOpen}`);
  const classes = useStyles();

  const handleClose = () => {
    toggleDialog(false);
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
              Menu
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Profile" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default DialogComponent;

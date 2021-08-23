import React, { useContext } from 'react';

// Context
import { DialogContext } from 'pages/Main/context/DialogContext';

// Components
import DialogComponent from 'pages/Main/components/Dialog';

const DialogContainer: React.FC = () => {
  const {
    data: { isOpen },
    mutations: { toggleDialog },
  } = useContext(DialogContext);
  return <DialogComponent isOpen={isOpen} toggleDialog={toggleDialog} />;
};

export default DialogContainer;

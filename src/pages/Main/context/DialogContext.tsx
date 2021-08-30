import React, { createContext, useState } from 'react';

export const useStateContainer = (initialState: { isOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(initialState.isOpen || false);

  const toggleDialog = (_isOpen: boolean): void => {
    setIsOpen(_isOpen);
  };

  return {
    data: { isOpen },
    mutations: {
      toggleDialog,
    },
  };
};

export const DialogContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export const DialogProvider: React.FC = ({ children }) => {
  const contextValue = useStateContainer({
    isOpen: false,
  });
  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};

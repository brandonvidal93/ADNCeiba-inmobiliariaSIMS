import React, { createContext, useState } from 'react';

export const useStateContainer = (initialState: {
  isOpen?: boolean;
  isEditMode?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(initialState.isOpen || false);
  const [isEditMode, setIsEditMode] = useState(
    initialState.isEditMode || false,
  );

  const toggleDialog = (_isOpen: boolean): void => {
    setIsOpen(_isOpen);
  };

  const toggleEditMode = (_isEditMode: boolean): void => {
    setIsEditMode(_isEditMode);
  };

  return {
    data: { isOpen, isEditMode },
    mutations: {
      toggleDialog,
      toggleEditMode,
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

import React, { createContext, useEffect, useState } from 'react';
import * as buildingService from '../services/buildingService';
import { BuildingModel } from '../models/BuildingModel';
import { ItemModel } from '../models/ItemModel';

export interface BuildingState {
  allBuildings?: BuildingModel;
}

export const useStateContainer = (initialState: BuildingState = {}) => {
  const [allBuildings, setAllBuildings] = useState(
    initialState.allBuildings || { items: [] },
  );

  useEffect(() => {
    buildingService
      .listBuilding()
      .then((buildings) => setAllBuildings(buildings));
  }, []);

  return {
    data: { allBuildings },
  };
};

export const BuildingContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export interface BuildingProvidedProps {
  initialState?: BuildingState;
}

export const BuildingProvider: React.FC<BuildingProvidedProps> = ({
  children,
  initialState = {},
}) => {
  const contextValue = useStateContainer(initialState);
  return (
    <BuildingContext.Provider value={contextValue}>
      {children}
    </BuildingContext.Provider>
  );
};

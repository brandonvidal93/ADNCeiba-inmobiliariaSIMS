import React, { createContext, useEffect, useState } from 'react';
import * as buildingService from '../services/buildingService';
import { ItemModel } from '../models/ItemModel';

export interface BuildingState {
  allBuildings?: ItemModel[];
  building?: ItemModel;
}

export const useStateContainer = (initialState: BuildingState = {}) => {
  const [allBuildings, setAllBuildings] = useState(
    initialState.allBuildings || [],
  );
  const [building, setBuilding] = useState(
    initialState.building || ({} as ItemModel),
  );

  useEffect(() => {
    buildingService
      .listBuilding()
      .then((buildings) => setAllBuildings(buildings));
  }, [allBuildings]);

  // addBuilding from service
  const addBuilding = (_building: ItemModel) => {
    buildingService
      .addBuilding(_building)
      .then((buildingAdd) => setAllBuildings([...allBuildings, buildingAdd]));
  };

  // updateBuilding from service
  const updateBuilding = (_building: ItemModel) => {
    buildingService.editBuilding(_building).then((buildingEdit) => {
      const index = allBuildings.findIndex((b) => b.id === buildingEdit.id);
      const newBuildings = [...allBuildings];
      newBuildings[index] = buildingEdit;
      setAllBuildings(newBuildings);
    });
  };

  // deleteBuilding from service
  const deleteBuilding = (buildingId: number) => {
    buildingService.deleteBuilding(buildingId).then((buildingDelete) => {
      const index = allBuildings.findIndex((b) => b.id === buildingDelete.id);
      const newBuildings = [...allBuildings];
      newBuildings.splice(index, 1);
      setAllBuildings(newBuildings);
    });
  };

  const buildingSet = (_building: ItemModel) => {
    setBuilding(_building);
  };

  return {
    data: { allBuildings, building },
    methods: { addBuilding, updateBuilding, deleteBuilding, buildingSet },
  };
};

export const BuildingContext = createContext<
  ReturnType<typeof useStateContainer>
>([] as never);

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

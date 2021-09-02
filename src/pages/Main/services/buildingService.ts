import { AxiosInstance } from 'config/AxiosConfig';
import { ItemModel } from 'pages/Main/models/ItemModel';

// Type ItemModel as Array not object
export const listBuilding = (): Promise<ItemModel[]> =>
  AxiosInstance.get<ItemModel[]>('/buildings').then(
    (response) => response.data,
  );

// axios post request
export const addBuilding = (building: ItemModel): Promise<ItemModel> =>
  AxiosInstance.post<ItemModel>('/buildings', building).then(
    (response) => response.data,
  );

// axios put request
export const editBuilding = (building: ItemModel): Promise<ItemModel> =>
  AxiosInstance.put<ItemModel>(`/buildings/${building.id}`, building).then(
    (response) => response.data,
  );

// axios delete request
export const deleteBuilding = (buildingId: number): Promise<ItemModel> =>
  AxiosInstance.delete<ItemModel>(`/buildings/${buildingId}`).then(
    (response) => response.data,
  );

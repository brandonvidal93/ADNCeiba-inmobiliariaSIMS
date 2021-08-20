import axios from 'axios';
import { BuildingModel } from 'pages/Main/models/BuildingModel';
import { ItemModel } from 'pages/Main/models/ItemModel';

export const listBuilding = (): Promise<BuildingModel> =>
  axios.get<BuildingModel>('/buildings').then((response) => response.data);

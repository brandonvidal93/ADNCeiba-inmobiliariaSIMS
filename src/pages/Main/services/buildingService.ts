import axios from 'axios';
import { ItemModel } from 'pages/Main/models/ItemModel';

export const listBuilding = (): Promise<ItemModel> =>
  axios.get<ItemModel>('/buildings').then((response) => response.data);

import axios from 'axios';
import { ItemModel } from 'pages/Main/models/ItemModel';

// Type ItemModel as Array not object
export const listBuilding = (): Promise<ItemModel[]> =>
  axios.get<ItemModel[]>('/buildings').then((response) => response.data);

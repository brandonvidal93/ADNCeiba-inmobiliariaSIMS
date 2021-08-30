export interface ItemModel {
  id: number;
  type: number;
  totalArea: number;
  builtArea: number;
  antique: string;
  levelId: number;
  ubication: string;
  address: string;
  rooms: number;
  office?: number;
  bathrooms: number;
  garages?: number;
  floors: number;
  price: number;
  priceDiscount: number;
  priceAdmon?: number;
  pricePolicy?: number;
  imgCover: string;
  descripcion?: string;
}
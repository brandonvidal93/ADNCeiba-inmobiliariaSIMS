import React from 'react';

// Models
import { ItemModel } from 'pages/Main/models/ItemModel';

// Components
import CardItem from '../CardItem';

export interface BuildingCardProps {
  item: ItemModel;
}

const BuildingCard: React.FC<BuildingCardProps> = ({ item }) => {
  return (
    <>
      <CardItem
        id={item.id}
        type={item.type}
        totalArea={item.totalArea}
        builtArea={item.builtArea}
        antique={item.antique}
        levelId={item.levelId}
        ubication={item.ubication}
        address={item.address}
        rooms={item.rooms}
        office={item.office}
        bathrooms={item.bathrooms}
        garages={item.garages}
        floors={item.floors}
        price={item.price}
        priceAdmon={item.priceAdmon}
        imgCover={item.imgCover}
        descripcion={item.descripcion}
      />
    </>
  );
};

export default BuildingCard;

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
        typeId={item.typeId}
        totalArea={item.totalArea}
        ubicationId={item.ubicationId}
        rooms={item.rooms}
        bathrooms={item.bathrooms}
        price={item.price}
        priceDiscount={item.priceDiscount}
        imgCover={item.imgCover}
      />
    </>
  );
};

export default BuildingCard;

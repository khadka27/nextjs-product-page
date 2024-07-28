import React from "react";
import Card from "./Card";
import { Product } from "./types";

interface CardBodyProps {
  products: Product[];
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  addedItems: Product[];
}

const CardBody: React.FC<CardBodyProps> = ({
  products,
  addItem,
  removeItem,
  addedItems,
}) => {
  products.forEach((product) => (product.isAdded = true));

  return (
    <div className="card__body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default CardBody;

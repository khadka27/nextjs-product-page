import React, { useEffect, useState } from "react";
import { Product } from "./types";

interface CardProps {
  product: Product;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  addedItems: Product[];
}

const Card: React.FC<CardProps> = ({
  product,
  addItem,
  removeItem,
  addedItems,
}) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id === product.id);

  useEffect(() => {
    item.length === 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  return (
    <div className="card p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <img className="card__img w-1/3 mb-4" src={product.image} alt="" />
      <div>
        <h2 className="text-xl font-semibold underline">{product.category}</h2>
        <h4 className="text-lg font-medium mt-2">{product.title}</h4>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>
      <div className="card-price-add flex items-center justify-between mt-4">
        <span className="text-lg font-semibold">Price: ${product.price}</span>
        <button
          className={`px-4 py-2 rounded-md font-bold transition duration-200 ${
            isAdded
              ? "bg-green-500 text-white border-2 border-green-500 hover:bg-white hover:text-green-500"
              : "bg-red-500 text-white border-2 border-red-500 hover:bg-white hover:text-red-500"
          }`}
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "ADD" : "CANCEL"}
        </button>
      </div>
    </div>
  );
};

export default Card;

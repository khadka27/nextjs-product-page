import React from "react";
import { Product } from "@/components/types";

interface CardListProps {
  item: Product;
  removeItem: (item: Product) => void;
  setAddedItem: (items: Product[]) => void;
  itemsArr: Product[];
}

const CardList: React.FC<CardListProps> = ({
  item,
  removeItem,
  setAddedItem,
  itemsArr,
}) => {
  const increment = () => {
    const newItems = itemsArr.map((itm) => {
      if (itm.id === item.id) {
        itm.addNumber = (itm.addNumber || 1) + 1;
      }
      return itm;
    });
    setAddedItem(newItems);
  };

  const decrement = () => {
    const newItems = itemsArr.map((itm) => {
      if (itm.id === item.id && itm.addNumber! > 1) {
        itm.addNumber = itm.addNumber! - 1;
      }
      return itm;
    });
    setAddedItem(newItems);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <img
        className="w-20 h-20 object-cover"
        src={item.image}
        alt={item.title}
      />
      <div className="flex flex-col">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center">
        <button
          className="px-2 py-1 border border-gray-300"
          onClick={decrement}
        >
          -
        </button>
        <span className="px-4">{item.addNumber}</span>
        <button
          className="px-2 py-1 border border-gray-300"
          onClick={increment}
        >
          +
        </button>
      </div>
      <button className="text-red-500" onClick={() => removeItem(item)}>
        Remove
      </button>
    </div>
  );
};

export default CardList;

import React from "react";

interface AddRemoveBtnProps {
  isAdded: boolean;
  addItem: (product: any) => void;
  product: any;
  removeItem: (product: any) => void;
  setIsAdded: (isAdded: boolean) => void;
}

export const AddRemoveBtn: React.FC<AddRemoveBtnProps> = ({
  isAdded,
  addItem,
  product,
  removeItem,
  setIsAdded,
}) => {
  return (
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
  );
};

import React, { useRef } from "react";
import CardList from "./CardList";
import { Product } from "./types";

interface AddProductsProps {
  items: Product[];
  click: (value: boolean) => void;
  removeItem: (item: Product) => void;
  setAddedItem: (items: Product[]) => void;
}

const AddProducts: React.FC<AddProductsProps> = ({
  items,
  click,
  removeItem,
  setAddedItem,
}) => {
  const total = items
    .reduce((pre, cur) => {
      return pre + Number(cur.addNumber) * Number(cur.price);
    }, 0)
    .toFixed(2);

  const showDivRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={showDivRef}
      className="fixed top-0 right-0 w-full h-screen flex z-20 animate-showhide"
    >
      <div className="bg-gray-100 w-7/12 h-screen">
        <div className="hidden print:block bg-white p-4 h-full flex flex-col items-center">
          <h1 className="mb-16">Shopping</h1>
          <table className="border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black p-1">No.</th>
                <th className="border border-black p-1 w-80">Item Name</th>
                <th className="border border-black p-1">Price</th>
                <th className="border border-black p-1">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={item.id}>
                  <td className="border border-black p-1">{i + 1}</td>
                  <td className="border border-black p-1">{item.title}</td>
                  <td className="border border-black p-1">${item.price}</td>
                  <td className="border border-black p-1">{item.addNumber}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="border border-black p-1" colSpan={2}>
                  Total
                </td>
                <td className="border border-black p-1" colSpan={2}>
                  ${total}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="bg-white w-5/12 h-screen p-4">
        <div className="flex justify-between items-center h-20">
          <h1>
            Shopping{" "}
            <span className="bg-blue-500 text-white px-4 py-2 rounded-md">
              {items.length}
            </span>
            {items.length <= 1 ? " item" : " items"}
          </h1>
          <button
            className="text-xl"
            onClick={() => {
              if (showDivRef.current) {
                showDivRef.current.classList.add("animate-hideshow");
                setTimeout(() => click(false), 200);
              }
            }}
          >
            ⌫
          </button>
        </div>
        <div className="h-7/12 overflow-scroll p-4">
          {items.map((item, i, itemsArr) => (
            <CardList
              key={item.id}
              item={item}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
              itemsArr={itemsArr}
            />
          ))}
        </div>
        <div className="h-20 flex flex-col justify-center">
          <div className="h-px bg-gray-200 mb-4"></div>
          <div className="flex justify-between items-center px-4">
            <h4>Total :</h4>
            <h1>${total}</h1>
          </div>
          <div className="text-center mt-4">
            <button
              className="text-2xl px-8 py-4 bg-blue-500 text-white border-2 border-white rounded-md font-bold cursor-pointer transition duration-200 hover:bg-white hover:border-blue-500 hover:text-blue-500"
              onClick={() => {
                items.length >= 1 && print();
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;

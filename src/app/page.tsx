"use client";
import React, { useEffect, useState, ChangeEvent } from "react";

import CardBody from "@/components/CardBody";
import Search from "@/components/Search";

import Header from "@/components/Hearder";
import Button from "@/components/button";
import AddProducts from "@/components/AddProduct";

import { Product } from "@/components/types";

const App: React.FC = () => {
  const [items, setItem] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [addedItems, setAddedItem] = useState<Product[]>([]);
  const [showAddProducts, setShowAddProducts] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const changingSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const itemsFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addItem = (item: Product) => {
    item.addNumber = 1;
    setAddedItem([...addedItems, item]);
  };

  const removeItem = (item: Product) => {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  };

  return (
    <div className="container mx-auto">
      <div className="body__container">
        <div className="nav flex justify-between items-center p-4 bg-gray-100">
          <Header />
          <div className="nav-right flex items-center gap-4">
            <Search value={searchValue} onChangeData={changingSearchData} />
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>

        {showAddProducts && (
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )}
        <CardBody
          products={itemsFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      </div>
    </div>
  );
};

export default App;

import React from "react";

interface Product {
  id: number;
  title: string;
}

interface ListProps {
  products: Product[];
}

const List: React.FC<ListProps> = ({ products }) => {
  return (
    <ol className="list-decimal pl-4">
      {products.map((product) => (
        <li key={product.id} className="mb-2 pb-2 border-b border-gray-300">
          {product.title}
        </li>
      ))}
    </ol>
  );
};

export default List;

import React from "react";

interface ButtonProps {
  num: number;
  click: (value: boolean) => void;
}

const Button: React.FC<ButtonProps> = ({ num, click }) => {
  return (
    <button
      className="px-8 py-4 block text-base bg-white border-2 border-blue-500 rounded-md cursor-pointer"
      onClick={() => click(true)}
    >
      You Added{" "}
      <span className="bg-red-500 inline-block px-2 py-1 mx-2 rounded-md text-white">
        {num}
      </span>{" "}
      {num <= 1 ? "item" : "items"}
    </button>
  );
};

export default Button;

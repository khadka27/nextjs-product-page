import React, { ChangeEvent } from "react";

interface SearchProps {
  value: string;
  onChangeData: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChangeData }) => {
  return (
    <div>
      <input
        className="w-72 px-5 py-2 border border-primary rounded focus:outline-none focus:border-primary text-black"
        type="text"
        placeholder="Enter product name"
        value={value}
        onChange={onChangeData}
      />
    </div>
  );
};

export default Search;

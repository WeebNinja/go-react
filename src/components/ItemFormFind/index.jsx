import React, { useState, useEffect } from "react";
import Item from "../item";

const ItemFormFind = () => {
  const [inputId, setInputId] = useState("");
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    console.log("Updated itemId=" + itemId);
  }, [itemId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inputId=" + inputId);
    setItemId(Number(inputId));
    console.log("itemId=" + itemId);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          Enter Item ID:
          <input
            type="number"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            className="border rounded-md py-2 px-3 mt-2"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {itemId !== null && <Item id={itemId} />}
    </div>
  );
};

export default ItemFormFind;

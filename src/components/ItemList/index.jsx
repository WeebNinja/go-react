import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css"; 


const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/items");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Items List</h1>
      {isLoading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <ul className="list-disc pl-4">
        {items.map((item) => (
          <li key={item.ID} className="mb-2">
            <span className="font-bold">Name:</span> {item.Name} 
            <span className="font-bold">Price:</span> {item.Price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;

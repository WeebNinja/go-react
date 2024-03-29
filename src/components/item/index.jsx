import React, { useState, useEffect } from "react";

const Item = ({ id }) => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log("id from form =" + id);
        const response = await fetch(`http://localhost:5000/items/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data = " + JSON.stringify(data)); // Print data as a string
        setItem(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (isLoading) return <p className="text-center mt-4">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-4 text-red-500">
        Error loading item: {error}
      </p>
    );
  if (!item)
    return <p className="text-center mt-4">No item found for ID {id}</p>;

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Item Details</h2>
      <p>
        <strong>ID:</strong> {item.ID}
      </p>
      <p>
        <strong>Name:</strong> {item.Name}
      </p>
      {/* Render other item properties as needed */}
    </div>
  );
};

export default Item;

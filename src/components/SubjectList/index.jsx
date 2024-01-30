import React, { useState, useEffect } from "react";

const SubjectsList = ({ id }) => {
  const [subjects, setSubjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        console.log("id from form =" + id);
        const response = await fetch(`http://localhost:5000/subjects/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data = " + JSON.stringify(data)); // Print data as a string
        setSubjects(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubject();
  }, [id]);

  if (isLoading) return <p className="text-center mt-4">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-4 text-red-500">
        Error loading subject: {error}
      </p>
    );
  if (!subjects)
    return <p className="text-center mt-4">No subject found for ID {id}</p>;

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Subject Details</h2>
      <p>
        <strong>ID:</strong> {subjects.ID}
      </p>
      <p>
        <strong>Name:</strong> {subjects.Name}
      </p>
      <p>
        <strong>Description:</strong> {subjects.Description}
      </p>
      {/* Render other subject properties as needed */}
    </div>
  );
};

export default SubjectsList;

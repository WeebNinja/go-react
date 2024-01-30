import React, { useState, useEffect } from "react";

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/subjects");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubjects(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Subjects List</h1>
      {isLoading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <ul className="list-disc pl-4">
        {subjects.map((subject) => (
          <li key={subject.ID} className="mb-2">
            <span className="font-bold">Name:</span> {subject.Name} |{" "}
            <span className="font-bold">Description:</span> {subject.Description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subjects;

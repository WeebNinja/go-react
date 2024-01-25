import React, { useState, useEffect } from "react";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:5000/students");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Students List</h1>
      {isLoading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <ul className="list-disc pl-4">
        {students.map((student) => (
          <li key={student.ID} className="mb-2">
            <span className="font-bold">FirstName:</span> {student.FirstName} |{" "}
            <span className="font-bold">LastName:</span> {student.LastName} |{" "}
            <span className="font-bold">Age:</span> {student.Age} |{" "}
            <span className="font-bold">Grade:</span> {student.Grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;

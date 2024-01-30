import React, { useState, useEffect } from "react";

const StudentList = ({ id }) => {
  const [students, setStudents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        console.log("id from form =" + id);
        const response = await fetch(`http://localhost:5000/students/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data = " + JSON.stringify(data)); // Print data as a string
        setStudents(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (isLoading) return <p className="text-center mt-4">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-4 text-red-500">
        Error loading student: {error}
      </p>
    );
  if (!students)
    return <p className="text-center mt-4">No student found for ID {id}</p>;

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Student Details</h2>
      <p>
        <strong>ID:</strong> {students.ID}
      </p>
      <p>
        <strong>First Name:</strong> {students.FirstName}
      </p>
      <p>
        <strong>Last Name:</strong> {students.LastName}
      </p>
      <p>
        <strong>Age:</strong> {students.Age}
      </p>
      <p>
        <strong>Grade:</strong> {students.Grade}
      </p>
      {/* Render other student properties as needed */}
    </div>
  );
};

export default StudentList;

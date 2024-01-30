import React, { useState, useEffect } from "react";
import StudentList from "../StudentList";

const StudentFormFind = () => {
  const [inputId, setInputId] = useState("");
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    console.log("Updated studentId=" + studentId);
  }, [studentId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inputId=" + inputId);
    setStudentId(Number(inputId));
    console.log("studentId=" + studentId);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          Enter Student ID:
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
      {studentId !== null && <StudentList id={studentId} />}
    </div>
  );
};

export default StudentFormFind;

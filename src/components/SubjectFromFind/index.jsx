import React, { useState, useEffect } from "react";
import SubjectsList from "../SubjectList";

const SubjectFormFind = () => {
  const [inputId, setInputId] = useState("");
  const [subjectId, setSubjectId] = useState(null);

  useEffect(() => {
    console.log("Updated subjectId=" + subjectId);
  }, [subjectId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inputId=" + inputId);
    setSubjectId(Number(inputId));
    console.log("subjectId=" + subjectId);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          Enter Subject ID:
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
      {subjectId !== null && <SubjectsList id={subjectId} />}
    </div>
  );
};

export default SubjectFormFind;

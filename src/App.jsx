import { useState } from "react";
import "./App.css";
import ItemsList from "./components/item";
import StudentsList from "./components/student";
import SubjectsList from "./components/subject";


function App() {
  return (
    <>
      <div className="card">
        <ItemsList />
      </div>
      <div className="card">
        <StudentsList />
      </div>
      <div className="card">
        <SubjectsList />
      </div>
    </>
  );
}

export default App;


import "./App.css";
import SubjectsList from "./components/Subject";
import ItemsList from "./components/ItemList";
import ItemFormFind from "./components/ItemFormFind";
import StudentFormFind from "./components/StudentFormFind";
import Students from "./components/student";
import Subjects from "./components/Subject";
import SubjectFormFind from "./components/SubjectFromFind";

function App() {
  return (
    <>
      <div className="card">
        <ItemsList />
      </div>
      <div className="card">
        <Students/>
      </div>
      <div className="card">
        <Subjects />
      </div>
      <p>
        <ItemFormFind/>
      </p>
      <p>
        <StudentFormFind/>
      </p>
      <p>
        <SubjectFormFind/>
      </p>
    </>
  );
}

export default App;

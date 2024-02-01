import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import ItemsList from "./components/ItemList";
import ItemFormFind from "./components/ItemFormFind";
import Register from "./components/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setRegister] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleRegisterSuccess = () => {
    setRegister(false);
  };

  return (
    /* Add the Router component to the App */
    <Router>
      <div>
        <h3>My Project</h3>
        <nav>
          <Link to="/">หน้าหลัก</Link>
          <hr />
          {!isLoggedIn && <Link to="/signin">เข้าสู่ระบบ</Link>}
          <hr />
          {!isRegister && <Link to="/register">สมัครสมาชิก</Link>}
        </nav>

        {/* Add the Routes component to the App */}
        {/* <> xxx </>คือตำแหน่งที่ข้อมูลจาก Component คือค่ามา */}
        <Routes>
          <Route
            path="/signin"
            element={<SignIn onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/register"
            element={<Register onRegisterSuccess={handleRegisterSuccess} />}
          />
          <Route
            path="/"
            element={
              <>
                <div className="card">
                  {isLoggedIn ?  (
                    <>
                      <p>ยินดีต้อนรับ</p>
                      <p>
                        <ItemsList />
                      </p>
                      <hr />
                      <p>
                        <ItemFormFind />
                      </p>
                    </>
                  ) : (
                    <p>กรุณา Login </p>
                  )}
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

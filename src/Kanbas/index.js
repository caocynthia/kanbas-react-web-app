import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div className="wd-left-spacing wd-alternate-below container">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route
            path="Account"
            element={
              <div className="wd-top-bar">
                <h1>Account</h1>
              </div>
            }
          />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;

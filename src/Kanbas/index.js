import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import db from "./Database";
import { useState } from "react";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

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
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses courses={courses} />}
          />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;

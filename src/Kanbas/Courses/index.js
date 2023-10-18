import { useParams } from "react-router";
import CourseNavigation from "./CourseNavigation";
import db from "../Database";
import { Link, Routes, Route } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentsEditor";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="d-none d-lg-flex wd-top-bar align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-list wd-hamburger"></i>
          <nav
            className="wd-center"
            styles="--bs-breadcrumb-divider: '>';"
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  to={`/Kanbas/Courses/${courseId}/Home`}
                  className={` ${"active"}`}
                >
                  Courses
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {course.name}
              </li>
            </ol>
          </nav>
        </div>
        <button className="wd-btn">
          <i className="bi bi-eyeglasses"></i>
          Student View
        </button>
      </div>
      <div className="d-flex">
        <div className="">
          <CourseNavigation />
        </div>
        <div className="container-fluid">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;

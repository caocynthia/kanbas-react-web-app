import { useParams } from "react-router";
import CourseNavigation from "./CourseNavigation";
import { Link, Routes, Route } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentsEditor";
import Grades from "./Grades";
import { useMatch } from "react-router-dom";

function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const match = useMatch("/:Kanbas/:Courses/:courseID/:page/*");
  const path = match.params["page"];

  return (
    <div>
      <div className="d-none d-lg-flex wd-top-bar align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-list wd-hamburger"></i>
          <nav className="wd-center" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  to={`/Kanbas/Courses/${courseId}/Home`}
                  className={` ${"active"}`}
                >
                  {course.name}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {path}
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
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;

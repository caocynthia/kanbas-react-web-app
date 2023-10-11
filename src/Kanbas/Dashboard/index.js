import { Link } from "react-router-dom";
import db from "../Database";
import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="container-fluid row row-cols-1 row-cols-md-3 gap-3 wd-card-container">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="col card"
          >
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;

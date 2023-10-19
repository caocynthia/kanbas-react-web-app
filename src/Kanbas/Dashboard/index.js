import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <div className="wd-top-bar">
        <h1>Dashboard </h1>
      </div>

      <div className="wd-top-bar">
        <h4>Published Courses ({courses.length})</h4>
      </div>

      <div className="row row-cols-1 row-cols-md-3 gap-3 wd-card-container m-0">
        {courses.map((course) => (
          <div key={course._id} className="col card">
            <img
              className="card-img-top"
              src="https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png"
              alt="webdev heading"
            ></img>
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}/Home`}
              className="card-body"
            >
              <h5 className="card-title">{course.name}</h5>

              <p className="card-text">
                {course.number} <br />
                {course.startDate} to {course.endDate}
              </p>
              <i className="bi bi-pencil-square"></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;

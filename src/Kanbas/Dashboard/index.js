import KanbasNavigation from "../KanbasNavigation";
import TopBar from "../Top Bar";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <KanbasNavigation />
      <div className="wd-left-spacing container">
        <TopBar />
        <h1>Dashboard</h1>
        <div className="card">
          {courses.map((course) => (
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="card"
            >
              {course.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

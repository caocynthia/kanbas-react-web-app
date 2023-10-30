import { Link } from "react-router-dom";
import { React } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <div className="wd-top-bar">
        <h1>Dashboard </h1>
      </div>

      <div className="wd-top-bar">
        <h4>Published Courses ({courses.length})</h4>
      </div>

      <div className="d-flex align-items-center mb-4 gap-2">
        <h5 className="p-0 m-0">Course</h5>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />

        <button className="wd-btn wd-btn-red" onClick={updateCourse}>
          Update
        </button>

        <button className="wd-btn wd-btn-red" onClick={addNewCourse}>
          Add
        </button>
      </div>

      <div className="row row-cols-1 row-cols-md-3 gap-3 wd-card-container m-0">
        {courses.map((course) => (
          <div key={course._id} className="col card d-flex">
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
            </Link>

            <div className="d-flex m-3 mt-0 gap-2">
              <button
                className="wd-btn wd-fit-content"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>
              <button
                className="wd-btn wd-fit-content"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;

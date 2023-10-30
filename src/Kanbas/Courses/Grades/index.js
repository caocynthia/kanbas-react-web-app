import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      GRADESSSS
      <div class="d-flex justify-content-end gap-2 mb-2">
        <button type="button" class="wd-btn">
          <i class="bi bi-file-earmark-arrow-up"></i>
          Import
        </button>
        <span class="dropdown wd-btn">
          <a
            class="dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-file-earmark-arrow-down"></i>
            Export
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/">
                Option 1
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Option 2
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Option 3
              </a>
            </li>
          </ul>
        </span>
        <button type="button" class="wd-btn">
          <i class="p-1 bi bi-gear-fill"></i>
        </button>
      </div>
      <div class="d-flex flex-column flex-md-row gap-3 mt-3">
        <div class="container-fluid">
          <h4>Student Names</h4>
          <div class="wd-dropdown d-flex justify-content-between">
            <div>
              <i class="bi bi-search p-1"></i>
              <input placeholder="Search Students"></input>
            </div>
            <i class="p-1 bi bi-chevron-down"></i>
          </div>
        </div>
        <div class="container-fluid">
          <h4>Assignment Names</h4>
          <div class="wd-dropdown d-flex justify-content-between">
            <div>
              <i class="bi bi-search p-1"></i>
              <input placeholder="Search Assignments"></input>
            </div>
            <i class="p-1 bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
      <button class="mt-3 mb-3 wd-btn" type="button">
        <i class="bi bi-funnel"></i>
        Apply Filters
      </button>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th className="wd-student-name">Student Name</th>
              {assignments.map((assignment) => (
                <th>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td className="wd-student-name">
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;

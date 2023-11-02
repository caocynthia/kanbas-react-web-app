import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAssignment, deleteAssignment } from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const dispatch = useDispatch();

  const [id, setID] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = (id) => {
    setIsOpen(true);
    setID(id);
  };
  const confirmDelete = () => {
    dispatch(deleteAssignment(id));
    setIsOpen(false);
  };

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="pb-2">
        <Link
          key={new Date().getTime().toString()}
          to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}
          className="wd-btn wd-btn-red wd-fit-content"
        >
          <i className="bi bi-plus-lg"></i>Assignment
        </Link>
      </div>

      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <div
            key={assignment._id}
            className="d-flex list-group-item align-items-center justify-content-between"
          >
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="text-decoration-none"
              handleClick={setAssignment(assignment)}
            >
              {assignment.title}
            </Link>
            <div className="d-flex gap-2">
              <button
                className="wd-btn"
                onClick={() => handleDelete(assignment._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="wd-popup d-flex flex-column gap-4">
          <div>Are you sure you want to delete this assignment?</div>
          <div className="d-flex gap-2">
            <button className="wd-btn" onClick={() => confirmDelete()}>
              Yes
            </button>
            <button className="wd-btn" onClick={() => setIsOpen(false)}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Assignments;

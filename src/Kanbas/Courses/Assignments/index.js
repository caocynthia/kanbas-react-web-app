import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setAssignment,
  deleteAssignment,
  setAssignments,
} from "./assignmentsReducer";
import { findAssignmentsForCourse } from "./client";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setID] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    findAssignmentsForCourse(courseId).then((assignments) =>
      dispatch(setAssignments(assignments))
    );
  }, [courseId, dispatch]);

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const handleDelete = (id) => {
    setIsOpen(true);
    setID(id);
  };

  const handleDeleteAssignment = (moduleId) => {
    client
      .deleteAssignment(moduleId)
      .then(dispatch(deleteAssignment(moduleId)));
  };

  const confirmDelete = () => {
    handleDeleteAssignment(id);
    setIsOpen(false);
  };

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="pb-2">
        <div
          className="wd-btn wd-btn-red wd-fit-content"
          onClick={() => {
            navigate(`/Kanbas/Courses/${courseId}/Assignments/AddAssignment`);
          }}
        >
          <i className="bi bi-plus-lg"></i>Assignment
        </div>
      </div>

      <div className="list-group">
        {courseAssignments.map((courseAssignment) => (
          <div
            key={courseAssignment._id}
            className="d-flex list-group-item align-items-center justify-content-between"
          >
            <div>
              <div
                to={`/Kanbas/Courses/${courseId}/Assignments/${courseAssignment._id}`}
                className="text-decoration-none"
                onClick={() => {
                  dispatch(setAssignment(courseAssignment));
                  navigate(
                    `/Kanbas/Courses/${courseId}/Assignments/${courseAssignment._id}`
                  );
                }}
              >
                {courseAssignment.title}
              </div>
              <div className="wd-assignment-description pt-1">
                Due date: {courseAssignment.dueDate}
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-check-circle-fill text-success"></i>
              <button
                className="wd-btn"
                onClick={() => handleDelete(courseAssignment.id)}
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
            <button
              className="wd-btn"
              onClick={() => {
                confirmDelete();
              }}
            >
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

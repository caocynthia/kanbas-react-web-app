import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  addAssignment,
  setAssignment,
  updateAssignment,
} from "../assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

function AssignmentEditor() {
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );

  const { courseId } = useParams();
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = () => {
    console.log(assignmentId);
    if (assignmentId.toString() === "AddAssignment") {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment({ ...assignment, course: courseId }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h4>Assignment Name</h4>
      <input
        value={assignment.title}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
      />
      <textarea
        value={assignment.description}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(
            setAssignment({ ...assignment, description: e.target.value })
          )
        }
      />
      <div className="d-flex gap-4 mt-4">
        <h4>Assign</h4>
        <div className="d-flex flex-column gap-2 wd-border">
          <div className="d-flex flex-column">
            <label>Due</label>
            <input
              type="date"
              value={assignment.dueDate}
              className="form-control mb-2"
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, dueDate: e.target.value })
                )
              }
            />
          </div>
          <div className="d-flex gap-4">
            <div className="d-flex flex-column">
              <label>Available from</label>
              <input
                type="date"
                value={assignment.availableFromDate}
                className="form-control mb-2"
                onChange={(e) =>
                  dispatch(
                    setAssignment({
                      ...assignment,
                      availableFromDate: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="d-flex flex-column">
              <label>Until</label>
              <input
                type="date"
                value={assignment.availableUntilDate}
                className="form-control mb-2"
                onChange={(e) =>
                  dispatch(
                    setAssignment({
                      ...assignment,
                      availableUntilDate: e.target.value,
                    })
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-end gap-2">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="wd-btn text-decoration-none"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="wd-btn wd-btn-red me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;

import { React } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="wd-modules">
      <div className="d-flex flex-row gap-2 mb-2">
        <div className="d-flex flex-column col-10 gap-2">
          <input
            className="wd-input"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="wd-input"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
        </div>
        <button
          className="wd-btn wd-btn-red wd-fit-content"
          onClick={() =>
            dispatch(updateModule({ ...module, course: courseId }))
          }
        >
          Update
        </button>
        <button
          className="wd-btn wd-btn-red wd-fit-content"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
      </div>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div key={index} className="list-group mb-2">
            <div className="list-group-item">
              <div className="d-flex justify-content-between">
                <h3>{module.name}</h3>

                <div className="d-flex gap-2">
                  <button
                    className="wd-btn"
                    onClick={(event) => {
                      setModule(module);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="wd-btn"
                    onClick={() => deleteModule(module._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <p>{module.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default ModuleList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="wd-modules">
      <div className="d-flex flex-column gap-2 mb-2">
        <div className="container d-flex flex-column gap-2">
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
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>
        <div className="d-flex justify-content-end gap-2">
          <button
            className="wd-btn wd-btn-red wd-fit-content"
            onClick={handleUpdateModule}
          >
            Update
          </button>
          <button
            className="wd-btn wd-btn-red wd-fit-content"
            onClick={handleAddModule}
          >
            Add
          </button>
        </div>
      </div>
      <hr />

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
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>

                  <button
                    className="wd-btn"
                    onClick={handleDeleteModule(module._id)}
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

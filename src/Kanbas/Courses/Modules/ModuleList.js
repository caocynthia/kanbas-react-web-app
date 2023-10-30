import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="wd-modules">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div key={index} className="list-group mb-2">
            <div className="list-group-item">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default ModuleList;

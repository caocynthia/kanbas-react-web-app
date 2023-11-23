import axios from "axios";
import React, { useState } from "react";

function WorkingWithObjects() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  // const API_BASE = `http://localhost:4000/api`;
  const URL = `${API_BASE}/a5/assignment`;

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };

  return (
    <div>
      <h3>Working With Objects</h3>

      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-light me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={updateTitle}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />

      <h4>Retrieving Objects</h4>
      <a href={URL} className="btn btn-light me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href={`${URL}/title`} className="btn btn-light me-2">
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;

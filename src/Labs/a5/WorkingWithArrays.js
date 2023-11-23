import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  // const API_BASE = process.env.REACT_APP_API_BASE;
  const API_BASE = `http://localhost:4000/api`;
  const URL = `${API_BASE}/a5/todos`;

  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get(URL);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${URL}/${id}`);
    setTodo(response.data);
  };

  //   const createTodo = async () => {
  //     const response = await axios.get(`${API}/create`);
  //     setTodos(response.data);
  //   };

  const postTodo = async () => {
    const response = await axios.post(URL, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (todo) => {
    await axios.delete(`${URL}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const updateTitle = async () => {
    const response = await axios.get(`${URL}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  return (
    <div>
      <h2>Working with Arrays</h2>
      <h4>Retrieving Arrays</h4>
      <a href={URL} className="btn btn-light me-2">
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a href={`${URL}/${todo.id}`} className="btn btn-light me-2">
        Get Todo by ID
      </a>

      <h3>Filtering Array Items</h3>
      <a href={`${URL}?completed=true`} className="btn btn-light me-2">
        Get Completed Todos
      </a>

      <h2>Working with Arrays</h2>
      <input value={todo.id} readOnly />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        value={todo.title}
        type="text"
      />
      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
      />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo} className="btn btn-light">
        Post Todo
      </button>
      <button
        //   onClick={createTodo}
        className="btn btn-primary mb-2 w-100"
      >
        Create Todo
      </button>
      <button onClick={updateTitle} className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex gap-2">
            {todo.title}
            <button className="wd-btn" onClick={() => fetchTodoById(todo.id)}>
              Edit
            </button>
            {/* <button
              className="wd-btn wd-btn-red"
              onClick={() => removeTodo(todo)}
            >
              Remove
            </button> */}
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkingWithArrays;

import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import Nav from "../Nav";
import { Routes, Route, Navigate } from "react-router";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
  return (
    <Provider store={store}>
      <div className="container labs">
        <h1>Welcome to Webdev</h1>
        <div>
          <h2>
            <a href="labs/a1/index.html">Lab 1</a>
          </h2>
          <hr />

          <h2>
            <a href="labs/a2/index.html">Lab 2</a>
          </h2>
          <hr />

          <h2>Lab 3</h2>
        </div>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
          <Route path="a5" element={<Assignment5 />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default Labs;

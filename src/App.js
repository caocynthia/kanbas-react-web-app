import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { Routes, Route } from "react-router";
// import { Navigate } from "react-router";
import AssignmentNav from "./AssignmentNav/AssignmentNav";
import Labs from "./Labs";
import Dashboard from "./Kanbas/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AssignmentNav />} />
      {/* <Route path="/" element={<Navigate to="/Labs" />} /> */}
      <Route path="/hello" element={<HelloWorld />} />
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
      <Route path="/Kanbas/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;

import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { Routes, Route, Navigate } from "react-router";
import AssignmentNav from "./AssignmentNav/AssignmentNav";
import Labs from "./Labs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AssignmentNav />} />
      {/* <Route path="/" element={<Navigate to="/Labs" />} /> */}
      <Route path="/hello" element={<HelloWorld />} />
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
    </Routes>
  );
}
export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { CodeEditor } from "./page/codeEditor/CodeEditor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/codeEditor" element={<CodeEditor />} />
    </Routes>
  );
}

export default App;

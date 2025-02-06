import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { CodeEditor } from "./page/codeEditor/CodeEditor";
import { CodeProvider } from "./context/CodeProvider";

function App() {
  return (
    <CodeProvider>
      <Routes>
        <Route path="/" element={<CodeEditor />} />
      </Routes>
    </CodeProvider>
  );
}

export default App;

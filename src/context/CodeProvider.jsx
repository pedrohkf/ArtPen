import React, { useState } from "react";
import { CodeContext } from "./CodeContext";

export const CodeProvider = ({ children }) => {
  const [codeHTML, setCodeHTML] = useState("");
  const [codeCSS, setCodeCSS] = useState("");

  return (
    <CodeContext.Provider value={{ codeHTML, setCodeHTML, codeCSS, setCodeCSS }}>
      {children}
    </CodeContext.Provider>
  );
};

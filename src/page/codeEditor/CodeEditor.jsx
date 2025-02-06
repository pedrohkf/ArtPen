import { useState } from "react";
import styles from "./CodeEditor.module.css";
import { CodeCss } from "../../components/CodeCss";
import { CodeHtml } from "../../components/CodeHtml";

export const CodeEditor = () => {
  const [page, setPage] = useState("html");

  return (
    <div className={styles.container}>
      CodeEditor
      <div>
        <button onClick={() => setPage("html")}>HTML</button>
        <button onClick={() => setPage("css")}>CSS</button>
        {page}
      </div>
      <div className={styles.content}>
        {page === "html" ? <CodeHtml /> : <CodeCss />}
      </div>
    </div>
  );
};

import { useState } from "react";
import styles from "./CodeEditor.module.css";
import { CodeCss } from "../../components/CodeCss";
import { CodeHtml } from "../../components/CodeHtml";
import { useCodeContext } from "../../hooks/useCodeContext";

export const CodeEditor = () => {
  const { codeHTML, codeCSS } = useCodeContext();
  const [page, setPage] = useState("html");

  return (
    <div className={styles.container}>
      CodeEditor
      <div>
        <button onClick={() => setPage("html")}>HTML</button>
        <button onClick={() => setPage("css")}>CSS</button>
        <p>{page}</p>
      </div>
      <div className={styles.content}>
        <style>{codeCSS}</style>
        {page === "html" ? <CodeHtml /> : <CodeCss />}
        <div
          className={styles.codeRendered}
          dangerouslySetInnerHTML={{ __html: codeHTML }}
        >
        </div>
      </div>
    </div>
  );
};

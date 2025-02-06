import { useEffect, useState } from "react";
import styles from "./CodeEditor.module.css";
import { CodeCss } from "../../components/CodeCss";
import { CodeHtml } from "../../components/CodeHtml";
import { useCodeContext } from "../../hooks/useCodeContext";

export const CodeEditor = () => {
  const { codeHTML, codeCSS } = useCodeContext();
  const [page, setPage] = useState("html");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab" && page === "html") {
        e.preventDefault();
        setPage("css");
      } else if (e.key === "Tab" && page === "css") {
        e.preventDefault();
        setPage("html");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, [codeHTML]);

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
        <div
          className={styles.codeRendered}
          dangerouslySetInnerHTML={{ __html: codeHTML }}
        ></div>
        <style>{codeCSS}</style>
      </div>
    </div>
  );
};

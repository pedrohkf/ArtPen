import styles from "./CodeHtml.module.css";
import { useCodeContext } from "../hooks/useCodeContext";
import { useEffect } from "react";
import { Editor } from "@monaco-editor/react";

export const CodeHtml = () => {
  const { codeHTML, setCodeHTML } = useCodeContext();

  useEffect(() => {
    const codeSaved = localStorage.getItem("codeHtml");
    if (codeSaved) {
      setCodeHTML(codeSaved);
    }
  }, []);

  useEffect(
    (e) => {
      localStorage.setItem("codeHtml", codeHTML);
    },
    [codeHTML]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Editor
          height="90vh"
          defaultLanguage="html"
          defaultValue={codeHTML}
          value={codeHTML}
          theme="vs-dark"
          onChange={(value) => setCodeHTML(value)}
        />
        {codeHTML.length}
      </div>
    </div>
  );
};

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

  const handleChange = (e) => {
    setCodeHTML(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <textarea
          type="text"
          value={codeHTML}
          onChange={handleChange}
        /> */}
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

import styles from "./CodeCss.module.css";
import { useCodeContext } from "../hooks/useCodeContext";
import { useEffect } from "react";
import { Editor } from "@monaco-editor/react";

export const CodeCss = () => {
  const { codeCSS, setCodeCSS } = useCodeContext();

  useEffect(() => {
    const codeSaved = localStorage.getItem("codeCSS");
    if (codeSaved) {
      setCodeCSS(codeSaved);
    }
  }, []);

  useEffect(
    (e) => {
      localStorage.setItem("codeCSS", codeCSS);
    },
    [codeCSS]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Editor
          defaultLanguage="css"
          defaultValue={codeCSS}
          value={codeCSS}
          theme="vs-dark"
          onChange={(value) => setCodeCSS(value)}
        />
      </div>
    </div>
  );
};

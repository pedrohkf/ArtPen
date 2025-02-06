import { useState } from "react";
import styles from "./CodeHtml.module.css";

export const CodeHtml = () => {
  const [html, setHTML] = useState("");

  const handleChange = (e) => {
    setHTML(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <textarea type="text" onChange={handleChange} />
      </div>
      <div
        className={styles.codeRendered}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
};

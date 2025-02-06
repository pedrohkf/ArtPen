import React, { useState } from "react";
import styles from "./CodeCss.module.css"

export const CodeCss = () => {
  const [css, setCSS] = useState("");

  const handleChangeCSS = (e) => {
    setCSS(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <textarea type="text" onChange={handleChangeCSS} />
      </div>

      <style>{css}</style>
    </div>
  );
};

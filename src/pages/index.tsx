import React from "react";
import styles from "./index.module.scss";

const Index: React.FC = () => (
  <div className={styles.titleWrapper}>
    <h1 className={styles.title}>Hello, world!</h1>
    <h2 className={styles.subtitle}>Gatsby is working!</h2>
  </div>
);

export default Index;

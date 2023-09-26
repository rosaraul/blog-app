import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, a wonderful blog page!</b> Discover stories and ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContaier}>
          <h1 className={styles.postTitle}>LOREP CEVA CEVA CEVA</h1>
          <p className={styles.postDesc}>
            CEVA CEVA CEVA CEVA CEVA CEVA CEVA CEVA CEVA CEVA
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

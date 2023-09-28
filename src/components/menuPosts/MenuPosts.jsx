import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            ceva cevacevaceceva ceva ceva dasd asd as dadasasd asdasd
          </h3>
          <div className={styles.details}>
            <span className={styles.uesrname}>John Doe</span>
            <span className={styles.date}> - 11.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            ceva cevacevaceceva ceva ceva dasd asd as dadasasd asdasd
          </h3>
          <div className={styles.details}>
            <span className={styles.uesrname}>John Doe</span>
            <span className={styles.date}> - 11.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            ceva cevacevaceceva ceva ceva dasd asd as dadasasd asdasd
          </h3>
          <div className={styles.details}>
            <span className={styles.uesrname}>John Doe</span>
            <span className={styles.date}> - 11.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            ceva cevacevaceceva ceva ceva dasd asd as dadasasd asdasd
          </h3>
          <div className={styles.details}>
            <span className={styles.uesrname}>John Doe</span>
            <span className={styles.date}> - 11.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
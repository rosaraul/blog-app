"use client";
import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous Page
      </button>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;

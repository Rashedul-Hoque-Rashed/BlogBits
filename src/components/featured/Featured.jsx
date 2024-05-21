import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>BlogBits: </b>Your Source for Stories and Ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Discover stories, creative ideas, tech trends, and coding tips.</h1>
          <p className={styles.postDesc}>
          Explore the boundless universe of ideas and insights on Blog Bits. From technology trends to personal narratives, discover captivating content curated to inspire and inform. Join us as we delve into a world where every bit of knowledge adds value to your journey.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
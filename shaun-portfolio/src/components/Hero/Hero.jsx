import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Shaun</h1>
      <p className={styles.description}>I'm a student with 0 years of experience. blah blah blah blah replace this</p>
      <a href="mailto:shaunlim1214@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} 
    alt="Her"
    className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur}/>
  </section>;
};
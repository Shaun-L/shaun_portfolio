import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img src ={getImageUrl("about/aboutImage.png")}
      alt ="Me sitting with a laptop"
      className={styles.aboutImage}/>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} 
          alt="Cursor Icon"/>
          <div className={styles.aboutItemText}>
            <h3>Software developer</h3>
            <p>I'm a software developer with experienc in building *finish this please* </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} 
          alt="Server Icon"/>
          <div className={styles.aboutItemText}>
            <h3>*Change This*</h3>
            <p>I'm a software developer with experienc in building "finish this please" </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} 
          alt="UI Icon"/>
          <div className={styles.aboutItemText}>
            <h3>*Change This*</h3>
            <p>I'm a software developer with experienc in building "finish this please" </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
};
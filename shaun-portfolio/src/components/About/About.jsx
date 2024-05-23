import React from "react";
import { getImageUrl } from "../../utils";

export const about = () => {
  return <section>
    <h2>About</h2>
    <div>
      <img src ={getImageUrl("about/aboutImage.png")}
      alt ="Me sitting with a laptop"/>
      <ul>
        <li>
          <img src={getImageUrl("about/cursorIcon.png")} 
          alt="Cursor"/>
          <div>
            <h3>Software developer</h3>
            <p>I'm a software developer with experienc in building "finish this please" </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
};
import React from "react";
import IMAGES from "../assets/images/index";

function About() {
  return (
    <div className="container">
      <h2 class="text-center">About Me</h2>
      <div className="row">
        <div className="col-3">
          <img src={IMAGES.avatar} alt="Avatar of myself" />
        </div>
        <div className="col-8 align-self-center">
          <card>
            Hi, my name's Caden Witbeck and I'm a web developer who's passionate
            about Javascript. I am currently enrolled in a Full Stack Web
            Development through Michigan State University. I'm a developer who
            is inspired by the idea of being a better me today than I was
            yesterday. To put it simply, I love to learn.
          </card>
        </div>
      </div>
    </div>
  );
}

export default About;

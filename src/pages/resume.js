import React from "react";
import IMAGES from "../assets/images/index";

function Resume() {
  return (
    <div className="container">
      <h2 class="text-center">Resume</h2>
      <img src={IMAGES.resume} class="img-fluid" alt="Resume" />
    </div>
  );
}

export default Resume;

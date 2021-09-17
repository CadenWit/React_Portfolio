import React from "react";
import IMAGES from "../assets/images/index";

function Projects() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="col">
          <div className="container text-center">
            <h4 className="name">Movies Snobs</h4>
            <img src={IMAGES.movieSnobs} alt="Movie Snob Homepage" />
            <p>
              Movie Snobs is a site used for the searching of movies and it
              returning a image and description of the move. The site used two
              different api's to find a image for one and the description for
              another.
            </p>
            <a
              className="btn btn-primary"
              href="https://github.com/CadenWit/MovieSnobs-Project1"
              role="button"
            >
              Github
            </a>
          </div>
        </div>
        <div className="col">
          <div class="container text-center">
            <h4 className="name ">Work Day Scheduler</h4>
            <img
              src={IMAGES.workDayScheduler}
              alt="Work Day Scheduler HomePage"
            />
            <p>
              Work Day Scheduler was a site created to make a users life easier.
              It is a simple site that allows you to schedule out you workoday.
              After inputing task you are doing at a certain time you can click
              the buttn on the side and will local store it. Background color
              will change allowing you to see what are past, present and, future
              tasks.
            </p>
            <a
              className="btn btn-primary"
              href="https://github.com/CadenWit/work-day-scheduler"
              role="button"
            >
              Github
            </a>
          </div>
        </div>
        <div className="col">
          <div className="container text-center">
            <h4 className="name ">RePost</h4>
            <img src={IMAGES.noteTaker} alt="NoteTaker HomePage" />
            <p>
              NoteTaker is a site that allows you to create, edit and, see
              previous notes. Great way from someone to keep track of there
              notes and add or delete from notes.
            </p>
            <a
              className="btn btn-primary"
              href="https://github.com/CadenWit/NoteTaker"
              role="button"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

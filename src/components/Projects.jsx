import React from "react";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import Title from "./Title";

import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";
import { ImageGallery } from "./ImageGallery";

const Projects = () => {
  return (
    <div className="w-full py-6 px-8 bg-black" id="projects">
      <div className="max-w-[1100px] mx-auto">
        <Title title="Our Projects" color="text-white" />
        <LightGallery>
          <ImageGallery urlImage={project1} />
          <ImageGallery urlImage={project2} />
          <ImageGallery urlImage={project3} />
          <ImageGallery urlImage={project4} />
          <ImageGallery urlImage={project5} />
          <ImageGallery urlImage={project6} />
        </LightGallery>
      </div>
    </div>
  );
};

export default Projects;

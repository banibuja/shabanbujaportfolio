"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "EnergieLeads",
    description: "NextJs, TailWindCss",
    image: "images/energieleads.png",
    tag: ["All"], 
    gitUrl: "https://github.com/banibuja/energieleads2",
    previewUrl: "https://energieleads2.vercel.app/",
  },
  {
    id: 2,
    title: "TradingFreaks",
    description: "NextJs, TailWindCss",
    image: "images/trading.png",
    tag: ["All"], 
    gitUrl: "https://github.com/banibuja/project2",
    previewUrl: "https://banibuja.github.io/project2/",
  },
  {
    id: 3,
    title: "e-Banking",
    description: "ReactJs, NodeJs, MySQL",
    image: "images/ebanking.png",
    tag: ["All"], 
    gitUrl: "https://github.com/banibuja/ebanking",
    previewUrl: "https://ebanking-ruddy.vercel.app/",
  },
  {
    id: 4,
    title: "OnlineStore",
    description: "PHP, HTML, CSS",
    image: "images/onlinestore.png",
    tag: ["All"], 
    gitUrl: "https://github.com/xentoro00/projekti-Web",
    previewUrl: "",
  },
  {
    id: 5,
    title: "CarShop GUI MakerMinds Exam",
    description: "Java",
    image: "images/java.png",
    tag: ["All"], 
    gitUrl: "https://github.com/banibuja/Final-Exam-Gui",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}

          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

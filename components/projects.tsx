import React from "react";
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Projects = ({
  projects = [
    {
      title: "Mock project",
      description: "Mock data",
      image: "/images/Mock.jpg",
      tech: ["Next.js", "TypeScript"],
      github: "#",
      live: "#",
      highlights: ["Mock highlights"],
    },
  ],
}) => {
  return (
    <section className="min-h-screen py-16" id="projects">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold dark:text-white mb-8">
          Featured Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="dark:bg-gray-900 border dark:border-gray-800"
            >
              <CardBody className="p-0">
                <div className="relative">
                  <img
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-300/90 dark:to-gray-900/90" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        isIconOnly
                        as={Link}
                        className="dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white"
                        href={project.github}
                        target="_blank"
                        variant="flat"
                      >
                        <FaGithub className="w-5 h-5" />
                      </Button>
                      <Button
                        isIconOnly
                        as={Link}
                        className="dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white"
                        href={project.live}
                        target="_blank"
                        variant="flat"
                      >
                        <CiGlobe className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <p className="dark:text-gray-300">{project.description}</p>

                  <div>
                    <h4 className="dark:text-white font-semibold mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="dark:text-gray-300 flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm border border-gray-400 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

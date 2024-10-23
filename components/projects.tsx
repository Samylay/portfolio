import React from "react";
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Projects = ({
  projects = [
    {
      title: "Mock project",
      description:
        "Mock data",
      image: "/api/placeholder/600/300",
      tech: ["Next.js", "TypeScript"],
      github: "#",
      live: "#",
      highlights: [
        "Mock highlights",
      ],
    },
  ],
}) => {
  return (
    <section className="min-h-screen py-16 bg-gray-950" id="projects">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-8">
          Featured Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-gray-900 border border-gray-800"
            >
              <CardBody className="p-0">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        as={Link}
                        href={project.github}
                        target="_blank"
                        isIconOnly
                        variant="flat"
                        className="bg-gray-800 text-gray-300 hover:text-white"
                      >
                        <FaGithub className="w-5 h-5" />
                      </Button>
                      <Button
                        as={Link}
                        href={project.live}
                        target="_blank"
                        isIconOnly
                        variant="flat"
                        className="bg-gray-800 text-gray-300 hover:text-white"
                      >
                        <CiGlobe className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-300">{project.description}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-gray-300 flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
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

import React from "react";
import { Card, CardBody } from "@nextui-org/react";

const Skills = ({
  skills = [
    {
      category: "Frontend",
      items: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      category: "Backend",
      items: ["PHP Symfony", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "Cypress"],
    },
  ],
}) => {
  return (
    <section className="min-h-screen py-16" id="skils">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold dark:text-white mb-8">
          Technical Skills
        </h2>
        <Card className="dark:bg-gray-900 grid gap-6 p-6">
          {skills.map((skillGroup) => (
            <CardBody
              key={skillGroup.category}
              className="border dark:border-gray-800 bg-gray-100/50 dark:bg-gray-900/50 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="font-semibold dark:text-white mb-4 border-b dark:border-gray-700 pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="dark:text-gray-300 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary-200 rounded-full" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default Skills;

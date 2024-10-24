import React from "react";
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import Image from "next/image";

const Hero = ({
  personalInfo = {
    name: "Samy Layaida",
    title: "Full Stack Developer",
    location: "Paris, France",
    image: "/images/my_image.jpg",
    bio: "Passionate about creating efficient, user-friendly applications with modern technologies.",
    links: {
      github: "https://github.com/Samylay",
      linkedin: "https://linkedin.com/in/samy-layaida",
      resume: "/path-to-resume.pdf",
    },
    availability: "Open to opportunities",
  },
}) => {
  return (
    <section className="min-h-screen py-16" id="hero">
      <div className="max-w-4xl mx-auto px-8 ">
        <Card className="dark:bg-gradient-to-br from-gray-900 to-gray-800 border dark:border-gray-800">
          <CardBody className="p-8">
            <div className="flex md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full border-4 border-gray-200 dark:border-gray-700 overflow-hidden">
                <Image
                  alt="Profile"
                  className="w-full h-full object-cover"
                  height={192}
                  src={personalInfo.image}
                  width={192}
                />
              </div>

              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <h1 className="text-4xl font-bold dark:text-white mb-2">
                    {personalInfo.name}
                  </h1>
                  <p className="text-2xl dark:text-gray-300 mb-2">
                    {personalInfo.title}
                  </p>
                  <p className="text-blue-400 flex items-center gap-2">
                    <FaMapMarkerAlt size={16} />
                    {personalInfo.location}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="dark:text-gray-300 text-lg leading-relaxed">
                    {personalInfo.bio}
                  </p>
                  <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <p className="text-emerald-400 flex items-center gap-2">
                      <BsBriefcase size={16} />
                      Currently Employed
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    as={Link}
                    className="dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white group"
                    href={personalInfo.links.github}
                    startContent={
                      <FaGithub
                        className="dark:group-hover:text-white transition-colors"
                        size={20}
                      />
                    }
                    target="_blank"
                    variant="flat"
                  >
                    GitHub
                  </Button>
                  <Button
                    as={Link}
                    className="dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white group"
                    href={personalInfo.links.linkedin}
                    startContent={
                      <FaLinkedinIn
                        className="dark:group-hover:text-white dark:transition-colors"
                        size={20}
                      />
                    }
                    target="_blank"
                    variant="flat"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Hero;

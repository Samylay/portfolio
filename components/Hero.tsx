import React from "react";
import { Card, CardBody, Button, Link, image } from "@nextui-org/react";
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
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
    <section className="min-h-screen py-16 bg-gray-950" id="hero">
      <div className="max-w-4xl mx-auto px-8  bg-gray-950">
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
          <CardBody className="p-8">
            <div className="flex md:flex-row gap-8 items-center">
              {/* Profile Image Column */}
              <div className="w-48 h-48 rounded-full border-4 border-gray-700 overflow-hidden">
                <Image
                  src={personalInfo.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={192}
                  height={192}
                />
              </div>

              {/* Info Column */}
              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    {personalInfo.name}
                  </h1>
                  <p className="text-2xl text-gray-300 mb-2">
                    {personalInfo.title}
                  </p>
                  <p className="text-blue-400 flex items-center gap-2">
                    <FaMapMarkerAlt size={16} />
                    {personalInfo.location}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
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
                    href={personalInfo.links.github}
                    target="_blank"
                    variant="flat"
                    className="bg-gray-800 text-gray-300 hover:text-white group"
                    startContent={
                      <FaGithub
                        size={20}
                        className="group-hover:text-white transition-colors"
                      />
                    }
                  >
                    GitHub
                  </Button>
                  <Button
                    as={Link}
                    href={personalInfo.links.linkedin}
                    target="_blank"
                    variant="flat"
                    className="bg-gray-800 text-gray-300 hover:text-white group"
                    startContent={
                      <FaLinkedinIn
                        size={20}
                        className="group-hover:text-white transition-colors"
                      />
                    }
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

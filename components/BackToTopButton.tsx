import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;

      setVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 p-4 bg-default/80 rounded-full shadow-lg transition-all duration-300 hover:bg-default/90 focus:ring-2 focus:ring-default/20 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-gray-700/90 dark:text-white w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;

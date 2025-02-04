import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialDock = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-2 bg-[#ffffff] bg-opacity-75 rounded-r">
      <a
        href="https://www.instagram.com/a_man.of.culture/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#000000] hover:text-[#848484] transition-colors"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/aman-khare-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#000000] hover:text-[#848484] transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/AmanKhare28"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#000000] hover:text-[#848484] transition-colors"
      >
        <FaGithub size={24} />
      </a>
    </div>
  );
};

export default SocialDock;

import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LINKEDIN_PROFILE, GITHUB_PROFILE } from "../constants/index.js";

const Navbar = () => {
  const { i18n } = useTranslation();

  // Função p/ mudar o idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { t } = useTranslation();
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="hidden sm:block text-3xl">LRB</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <div className="text-base">
          <a
            href="/resume/LucasCurriculo.pdf"
            download
            className="border border-neutral-500 rounded p-2 hover:bg-neutral-600 text-purple-200"
          >
            <i className="fa-solid fa-download hidden sm:inline mr-2"></i>
            Resume
          </a>
        </div>
        <a href={LINKEDIN_PROFILE.url}>
          <FaLinkedin className=" hover:text-neutral-500" />
        </a>
        <a href={GITHUB_PROFILE.url}>
          <FaGithub className=" hover:text-neutral-500" />
        </a>
        <a href={`mailto:${t("CONTACT.email")}`} className="hidden md:inline">
          <MdEmail className="  hover:text-neutral-500"></MdEmail>
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => changeLanguage("en")}
          className="text-xl text-purple-200 hover:text-neutral-500"
        >
          EN
        </button>
        <span>/</span>
        <button
          onClick={() => changeLanguage("pt")}
          className="text-xl text-purple-200 hover:text-neutral-500"
        >
          PT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

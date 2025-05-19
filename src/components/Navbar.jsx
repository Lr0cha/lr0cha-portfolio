import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LINKEDIN_PROFILE, GITHUB_PROFILE } from "../constants/index.js";
import flagBR from "../assets/flags/brasil-flag.svg";
import flagUS from "../assets/flags/usa-flag.svg";
const Navbar = () => {
  const { i18n } = useTranslation();

  // Função p/ mudar o idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { t } = useTranslation();

  const resumeLink =
    i18n.language === "pt"
      ? "/resume/Lucas Bianchin - Curriculo.pdf"
      : "/resume/Lucas Bianchin - Curriculum.pdf";

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="hidden sm:block text-3xl hover:scale-105">LRB</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <div className="text-base">
          <a
            href={resumeLink}
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
          className="hover:scale-110 transition-transform"
          aria-label="Switch to English"
        >
          <img src={flagUS} alt="English" width="30" height="30" />
        </button>
        <span className="font-medium text-2xl">/</span>
        <button
          onClick={() => changeLanguage("pt")}
          className="hover:scale-110 transition-transform"
          aria-label="Mudar para Português"
        >
          <img src={flagBR} alt="Portuguese" width="30" height="30" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import profileJpg from "../assets/selfieProfile.jpg";
import { delay, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Head = () => {
  const { t } = useTranslation();
  const content = t("HERO_CONTENT");

  const keywords = [
    "ReactJS",
    "Java",
    "Spring",
    "MySQL",
    "PostgreSQL",
    "freelance",
    "estágio",
    "internship",
  ];

  const highlightedContent = content.split(" ").map((word, index) => {
    if (keywords.some((keyword) => word.includes(keyword))) {
      return (
        <span key={index} className="font-bold text-purple-500">
          {word + " "}
        </span>
      );
    }
    return word + " ";
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Lucas Bianchin
            </motion.h1>

            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1.25)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {highlightedContent}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.25 }}
              src={profileJpg}
              alt="Lucas photo profile"
              className="xs:w-1/2 sm:w-1/2 lg:w-2/3 h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;

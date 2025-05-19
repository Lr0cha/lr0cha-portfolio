import { RiReactjsLine, RiTailwindCssLine, RiJavaLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSpringboot, SiPython, SiPhp, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { DiDocker } from "react-icons/di";

const techVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [15, -15],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">
        <i className="fa-solid fa-screwdriver-wrench mr-2"></i>Technologies
      </h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={techVariants(2.5)}
          initial="initial"
          animate="animate"
          className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavaLine className="text-5xl text-orange-600" />
          <p className="text-xs text-neutral-500 text-center mt-2">Java</p>
        </motion.div>

        <motion.div
          variants={techVariants(5)}
          initial="initial"
          animate="animate"
          className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-5xl text-green-600" />
          <p className="text-xs text-neutral-500 text-center mt-2">
            Spring Boot
          </p>
        </motion.div>

        <motion.div
          variants={techVariants(2)}
          initial="initial"
          animate="animate"
          className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiDocker className="text-5xl text-sky-700" />
          <p className="text-xs text-neutral-500 text-center mt-2">Docker</p>
        </motion.div>

        <motion.div
          variants={techVariants(2.5)}
          initial="initial"
          animate="animate"
          className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
          <p className="text-xs text-neutral-500 text-center mt-2">React</p>
        </motion.div>

        <motion.div
          variants={techVariants(6)}
          initial="initial"
          animate="animate"
          className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-5xl text-blue-600" />
          <p className="text-xs text-neutral-500 text-center mt-2">
            Typescript
          </p>
        </motion.div>

        <motion.div
          variants={techVariants(7)}
          initial="initial"
          animate="animate"
          className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-5xl text-blue-500" />
          <p className="text-xs text-neutral-500 text-center mt-2">
            PostgreSQL
          </p>
        </motion.div>

        <motion.div
          variants={techVariants(4.5)}
          initial="initial"
          animate="animate"
          className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-5xl text-yellow-500" />
          <p className="text-xs text-neutral-500 text-center mt-2">Python</p>
        </motion.div>

        <motion.div
          variants={techVariants(3.25)}
          initial="initial"
          animate="animate"
          className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPhp className="text-5xl text-blue-700" />
          <p className="text-xs text-neutral-500 text-center mt-2">PHP</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

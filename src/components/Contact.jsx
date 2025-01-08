import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        <i className="fa-solid fa-address-book mr-2"></i>
        Contact
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <i className="fa-solid fa-flag mr-2"></i> {t("CONTACT.country")}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <i className="fa-solid fa-phone mr-2"></i>
          {t("CONTACT.phone")}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          href={`mailto:${t("CONTACT.email")}`}
          className="border-b hover:text-neutral-500 "
        >
          <i className="fa-regular fa-envelope mr-2"></i>
          {t("CONTACT.email")}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

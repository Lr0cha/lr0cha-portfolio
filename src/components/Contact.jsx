import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        <i className="fa-solid fa-address-book mr-2"></i>Contact
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <i className="fa-solid fa-flag mr-2"></i> {CONTACT.country}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <i class="fa-solid fa-phone mr-2"></i>
          {CONTACT.phone}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          href={`mailto:${CONTACT.email}`}
          className="border-b hover:text-neutral-500 "
        >
          <i className="fa-regular fa-envelope mr-2"></i>
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

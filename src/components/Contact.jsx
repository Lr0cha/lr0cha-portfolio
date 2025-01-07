import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">
          <i class="fa-solid fa-flag mr-2"></i> {CONTACT.country}
        </p>
        <p className="my-4">
          <i class="fa-solid fa-phone mr-2"></i>
          {CONTACT.phone}
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b hover:text-neutral-500 hover:border-neutral-500 "
        >
          <i class="fa-regular fa-envelope mr-2"></i>
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;

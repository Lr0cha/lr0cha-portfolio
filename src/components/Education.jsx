import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        <i class="fa-solid fa-school mr-2"></i>Education
      </h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap items-start justify-start bg-neutral-900 p-6 rounded-lg shadow-lg"
          >
            <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
              <p className="text-sm font-semibold text-cyan-400">
                {education.year}
              </p>
            </div>

            <div className="w-full lg:w-3/4">
              <p className="text-lg font-medium text-neutral-200">
                {education.formation}
              </p>
              <p className="text-md text-neutral-300">
                {education.institution}
              </p>
              <p className="mt-3 text-sm text-neutral-400">
                {education.description}
              </p>

              <div className="mt-6">
                <p className="text-sm font-medium text-neutral-300">
                  Technologies:
                </p>
                <div className="flex flex-wrap mt-2">
                  {education.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-3 mb-2 rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

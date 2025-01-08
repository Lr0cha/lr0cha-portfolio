import { useTranslation } from "react-i18next";
const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl ">
        <i className="fa-solid fa-folder-open mr-2"></i>Projects
      </h2>
      <div>
        {t("PROJECTS", { returnObjects: true }).map((project, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap flex-col md:flex-row lg:justify-start items-center"
          >
            <div className="relative sm:w-2/3 lg:w-1/3 min-h-48 m-auto ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Overlay para aparecer os links*/}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-400 flex justify-center items-center rounded-lg">
                <a
                  href={project.source}
                  className="text-purple-300 px-4 py-2 mx-2 bg-neutral-700 rounded-md hover:text-purple-700 cursor-pointer transition duration-200"
                >
                  <i className="fa-solid fa-code mr-2"></i>Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="text-purple-300 px-4 py-2 mx-2 bg-neutral-700 rounded-md hover:text-purple-700 cursor-pointer transition duration-200"
                  >
                    <i className="fa-solid fa-globe mr-2"></i>Site
                  </a>
                )}
              </div>
            </div>
            <div className="sm:w-2/3  lg:w-2/3 m-auto pl-8">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

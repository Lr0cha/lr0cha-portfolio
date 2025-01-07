import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl ">
        <i class="fa-solid fa-folder-open mr-2"></i>Projects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-start items-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-1/2 lg:w-1/3 h-48 object-cover rounded-lg" // Imagem com largura fixa e altura proporcional
            />
            <div className="w-1/2 lg:w-2/3 pl-8">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
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

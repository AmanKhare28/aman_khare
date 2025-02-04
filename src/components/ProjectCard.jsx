const ProjectCard = ({ title, image, techStack, github, liveDemo }) => {
  return (
    <div className="bg-[#1c1c1c] rounded-2xl shadow-lg overflow-hidden w-80 sm:w-96 transition-transform transform hover:scale-105 p-5 flex flex-col justify-center items-center gap-2">
      <div className="flex gap-2 items-center">
        <img src={image} width={50} />
        <div className="text-white font-medium text-5xl">{title}</div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 w-[90%] mt-5">
        {techStack.map((skill, index) => (
          <div
            key={index}
            className="bg-[#2e2e2e] text-[#505050] px-3 py-1 text-lg rounded-full"
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="flex items-center w-[90%] m-auto gap-5 mt-10">
        <button className="bg-[#dfdfdf] p-1 rounded-2xl hover:bg-white cursor-pointer">
          <a href={github} target="_blank">
            <img src="/GitHub.svg" width={40} />
          </a>
        </button>
        <button className="bg-[#dfdfdf] p-0.5 rounded-2xl hover:bg-white cursor-pointer py-2 text-lg font-medium w-full">
          <a href={liveDemo} target="_blank">
            Live Demo
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

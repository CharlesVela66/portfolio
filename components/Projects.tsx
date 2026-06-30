import { PROJECTS } from "@/constants/constants"
import ProjectCard from "./ProjectCard"
import FadeIn from "./FadeIn"

const Projects = () => {
  return (
    <div className="w-full flex flex-col px-4 sm:px-10 md:px-20 space-y-4" id="projects">
      <h1 className="text-accent-main text-xl font-medium">Projects</h1>
      {PROJECTS.map((project, index) => (
        <FadeIn key={index} delay={index * 100}>
          <ProjectCard project={project} />
        </FadeIn>
      ))}
    </div>
  )
}

export default Projects
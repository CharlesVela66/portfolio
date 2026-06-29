import { PROJECTS } from "@/constants/constants"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className="w-full flex flex-col px-20 space-y-4">
      <h1 className="text-accent-main text-xl font-medium">Projects</h1>
      {PROJECTS.map((project, index) => (
        <ProjectCard project={project} key={index}/>
      ))}
    </div>
  )
}

export default Projects
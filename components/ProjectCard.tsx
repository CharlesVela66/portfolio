import { ProjectType } from '@/types/types'
import Image from 'next/image'
import Chip from './Chip';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    project: ProjectType;
}

const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <div className="w-full flex rounded-xl gap-3 border border-border">
        <Image 
            src={project.image}
            height={367}
            width={467}
            alt={project.title}
            className="object-cover rounded-bl-xl rounded-tl-xl w-auto h-auto"
        />
        <div className="flex flex-col px-6 py-3 w-full space-y-4">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold w-full">{project.title}</h1>
                <p className="font-light text-md line whitespace-nowrap">{project.year}</p>
            </div>
            <p className='text-light font-normal'>{project.description}</p>
            <div className='flex flex-row gap-2'>
                {project.stack.map((t, index) => (
                    <Chip label={t} key={index}/>
                ))}
            </div>
            <div className='flex flex-row items-center gap-1 underline text-accent-main mt-2'>
                <p>View live</p>
                <ArrowRight className='w-4 h-4' />
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
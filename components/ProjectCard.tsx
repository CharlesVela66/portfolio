import { ProjectType } from '@/types/types'
import Image from 'next/image'
import Chip from './Chip';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
    project: ProjectType;
}

const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row rounded-xl gap-3 border border-border overflow-hidden">
        <div className="relative w-full h-55 sm:h-70 md:h-92.5 md:w-1/3 shrink-0">
            <Image
                src={project.image}
                fill
                alt={project.title}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
            />
        </div>
        <div className="flex flex-col px-6 py-3 w-full space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <h1 className="text-2xl font-semibold w-full">{project.title}</h1>
                <p className="font-light text-md line whitespace-nowrap">{project.year}</p>
            </div>
            <p className='text-light font-normal'>{project.description}</p>
            <div className='flex flex-row gap-2 flex-wrap'>
                {project.stack.map((t, index) => (
                    <Chip label={t} key={index}/>
                ))}
            </div>
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className='flex flex-row items-center gap-1 underline text-accent-main mt-2'>
                <p>View live</p>
                <ArrowRight className='w-4 h-4' />
            </Link>
        </div>
    </div>
  )
}

export default ProjectCard
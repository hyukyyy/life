import {Project} from "@/contants/sites.ts";
import H1Title from "@/components/atom/H1Title.tsx";
import {useEffect, useState} from "react";

interface Props {
    project: Project;
}

export default function ProjectCard({project}: Props) {
    const [hovered, setHovered] = useState<boolean>(false);
    useEffect(() => {
        console.log(hovered)
    }, [hovered]);

    return <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
    >
        <div
            className={`
                flex 
                flex-col 
                justify-center 
                items-start 
                w-[360px] 
                h-auto 
                aspect-video 
                p-1 
                hover:opacity-90 
                duration-200
                relative
            `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <H1Title className={`p-2`}>
                {project.title}
            </H1Title>

            <div className={`w-full h-full relative overflow-y-hidden`}>
                <div
                    className={`
                        absolute 
                        top-0 
                        bg-gray-800 
                        bg-opacity-80 
                        w-full 
                        h-full
                        p-5 
                        flex 
                        justify-center 
                        items-center 
                        text-white 
                        ${hovered ? '' : 'translate-y-full'} 
                        duration-300 
                        `}
                >
                    {project.description}
                </div>
                <iframe src={project.url}
                        className={`w-full h-full`}/>
            </div>

        </div>
    </a>
}
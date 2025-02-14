import H3TabTitle from "@/components/atom/H3TabTitle.tsx";
import {AnimatePresence, motion} from "motion/react";
import {projects, projects2d} from "@/contants/sites.ts";
import ProjectCard from "@/components/organism/ProjectCard.tsx";
import useLayoutStore from "@/store/LayoutStore.ts";

export default function ProjectTab() {
    const {projectTabOpen, toggleProjectTabOpen} = useLayoutStore();

    return <section className={`overflow-y-hidden`}>
        <H3TabTitle onClick={toggleProjectTabOpen}>
            Projects
        </H3TabTitle>

        <AnimatePresence>
            {
                projectTabOpen &&
                <motion.div
                    key={'project-tab'}
                    initial={{
                        translateY: '-100%',
                        opacity: 0
                    }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                    }}
                    exit={{
                        translateY: '-100%',
                        opacity: 0
                    }}
                    transition={{
                        ease: 'easeOut',
                        duration: 0.3
                    }}
                >
                    <h2
                        className={`text-[18px] px-10 py-4 text-black font-bold`}
                    >
                        3D Tour Projects
                    </h2>

                    <div className={`flex flex-row justify-center flex-wrap gap-2`}>
                        {
                            projects.map(project => <ProjectCard key={project.title} project={project}/>)
                        }
                    </div>
                </motion.div>
            }
        </AnimatePresence>

        <AnimatePresence>
            {
                projectTabOpen &&
                <motion.div
                    key={'project-tab'}
                    initial={{
                        translateY: '-100%',
                        opacity: 0
                    }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                    }}
                    exit={{
                        translateY: '-100%',
                        opacity: 0
                    }}
                    transition={{
                        ease: 'easeOut',
                        duration: 0.3
                    }}
                >
                    <h2
                        className={`text-[18px] px-10 py-4 text-black font-bold`}
                    >
                        2D Websites
                    </h2>

                    <div className={`flex flex-row justify-center flex-wrap gap-2`}>
                        {
                            projects2d.map(project => <ProjectCard key={project.title} project={project}/>)
                        }
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    </section>
}
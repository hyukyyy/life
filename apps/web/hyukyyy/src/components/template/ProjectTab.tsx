import H3TabTitle from "@/components/atom/H3TabTitle.tsx";
import {AnimatePresence, motion} from "motion/react";
import {projects, projects2d} from "@/contants/sites.ts";
import ProjectCard from "@/components/organism/ProjectCard.tsx";
import useLayoutStore from "@/store/LayoutStore.ts";
import Arrow from "@/components/atom/UpperArrow.tsx";
import H2Subtitle from "@/components/atom/H2Subtitle.tsx";

export default function ProjectTab() {
    const {projectTabOpen, toggleProjectTabOpen} = useLayoutStore();

    return <section className={`overflow-y-hidden`}>
        <H3TabTitle className={`flex flex-row justify-between items-center`} onClick={toggleProjectTabOpen}>
            Projects
            <Arrow $up={projectTabOpen} />
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
                    <H2Subtitle>
                        3D Tour Projects
                    </H2Subtitle>

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
                    <H2Subtitle>
                        2D Websites
                    </H2Subtitle>

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
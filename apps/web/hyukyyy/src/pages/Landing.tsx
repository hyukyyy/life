import Header from "@/components/template/Header.tsx";
import {useEffect} from "react";
import useLayoutStore from "@/store/LayoutStore.ts";
import Card from "@/pages/Card.tsx";
import {projects} from "@/contants/sites.ts";
import ProjectCard from "@/components/organism/ProjectCard.tsx";
import {motion, AnimatePresence} from 'motion/react';
import H3TabTitle from "@/components/atom/H3TabTitle.tsx";

export default function Landing() {
    const {isDarkMode, projectTabOpen, toggleProjectTabOpen, careerTabOpen, toggleCareerTabOpen} = useLayoutStore();
    useEffect(() => {
        console.log('projectTabOpen', projectTabOpen)
    }, [projectTabOpen]);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    return <>
        <Header/>
        <img
            src={`https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=300&section=header&text=HYUKYYY&fontSize=60&animation=fadeIn&fontColor=${isDarkMode ? 'ffffff' : '000000'}`}
            alt={'landing_page_svg'}
        />
        <Card/>
        <section className={`overflow-y-hidden`}>
            <H3TabTitle onClick={toggleCareerTabOpen}>
                Career
            </H3TabTitle>
            <AnimatePresence>
                {
                    careerTabOpen &&
                    <motion.div
                        key={'career-tab'}
                        className={`flex flex-row justify-center flex-wrap`}
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
                    </motion.div>
                }
            </AnimatePresence>

        </section>
        <section className={`overflow-y-hidden`}>
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
                            <video autoPlay={true} muted={true} src={`/video/samsung_ai_life.mp4`} />
                            {/*{*/}
                            {/*    projects.map(project => <ProjectCard key={project.title} project={project}/>)*/}
                            {/*}*/}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

        </section>
    </>
        ;
}
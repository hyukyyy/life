import H3TabTitle from "@/components/atom/H3TabTitle.tsx";
import {AnimatePresence, motion} from "motion/react";
import useLayoutStore from "@/store/LayoutStore.ts";
import Arrow from "@/components/atom/UpperArrow.tsx";

export default function CareerTab() {
    const {careerTabOpen, toggleCareerTabOpen} = useLayoutStore();

    return <section className={`overflow-y-hidden`}>
        <H3TabTitle className={`flex flex-row justify-between items-center`} onClick={toggleCareerTabOpen}>
            Career
            <Arrow $up={careerTabOpen} />
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
}
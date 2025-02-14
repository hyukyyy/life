import H3TabTitle from "@/components/atom/H3TabTitle.tsx";
import {AnimatePresence, motion} from "motion/react";
import useLayoutStore from "@/store/LayoutStore.ts";
import Arrow from "@/components/atom/UpperArrow.tsx";
import RoundImg from "@/components/atom/RoundImg.tsx";
import H2Subtitle from "@/components/atom/H2Subtitle.tsx";

export default function CareerTab() {
    const {careerTabOpen, toggleCareerTabOpen} = useLayoutStore();

    return <section className={`overflow-y-hidden`}>
        <H3TabTitle className={`flex flex-row justify-between items-center`} onClick={toggleCareerTabOpen}>
            Career
            <Arrow $up={careerTabOpen}/>
        </H3TabTitle>
        <AnimatePresence>
            {
                careerTabOpen &&
                <motion.div
                    className={`py-10`}
                    key={'career-tab'}
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
                    <div className={`flex flex-row justify-between my-10 px-10`}>
                        <div className={`flex-1 flex justify-center items-center`}>
                            <RoundImg className={`w-1/2 h-auto aspect-square`} src={'/nnbox-logo.png'}/>
                        </div>
                        <div className={`flex-1 flex flex-col justify-center`}>
                            <span>2021.05-2022.12</span>
                            <a href={`https://www.nnbox.com/`}>
                                <H3TabTitle className={`p-0 border-0 my-3`}>냠냠박스</H3TabTitle>
                            </a>
                            <H2Subtitle className={`p-0 my-1`}>배달대행 플랫폼 서비스</H2Subtitle>
                            <ul>
                                <li>배달대행 플랫폼 서비스 개발 및 런칭 단계부터 참여</li>

                                <br/>

                                <li>주요 서비스</li>

                                <br/>

                                <li>1. 가맹점 포스용 웹 프로그램</li>
                                <li>2. 라이더용 모바일 앱</li>
                                <li>3. 지점 관제 직원용 웹 프로그램</li>
                                <li>4. 본사 관리자용 통계 및 정산 시스템</li>

                                <br/>

                                <li>서비스 런칭 이전 단계부터 합류하여 모든 서비스 개발에 참여함.</li>
                                <li>배달대행 서비스인만큼 좌표 거리 계산 및 그에 따른 배달비 로직 처리와</li>
                                <li>배달 상태 처리 트랜잭션 처리가 주된 핵심 기능.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`flex flex-row justify-between my-10 px-10`}>
                        <div className={`flex-1 flex justify-center items-center`}>
                            <RoundImg className={`w-1/2 h-auto aspect-square`} src={'/olim-logo.png'}/>
                        </div>
                        <div className={`flex-1 flex flex-col justify-center`}>
                            <span>2023.07-now</span>
                            <a href={`https://www.olimplanet.com/`}>
                                <H3TabTitle className={`p-0 border-0 my-3`}>올림플래닛</H3TabTitle>
                            </a>
                            <H2Subtitle className={`p-0 my-1`}>ELYPECS - 3D web solution 서비스</H2Subtitle>
                            <ul>
                                <li>3d 웹 콘텐츠 솔루션 개발팀</li>

                                <br/>

                                <li>주요 참여 프로젝트</li>

                                <br/>

                                <li>1. 비상교육 - vr 역사 체험관</li>
                                <li>2. 이노블록 - 부동산 견적 시스템</li>
                                <li>3. 큐리스올 - 가상 진료실</li>
                                <li>4. 행복의 나라 - 프로모션</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>

    </section>
}
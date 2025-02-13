import Header from "@/components/template/Header.tsx";
import {useEffect} from "react";
import useLayoutStore from "@/store/LayoutStore.ts";
import Card from "@/pages/Card.tsx";
import {projects} from "@/contants/sites.ts";
import ProjectCard from "@/components/organism/ProjectCard.tsx";

export default function Landing() {
    const {isDarkMode} = useLayoutStore();
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
            alt={'landing_page_svg'}/>
        <Card/>
        <h3 className={`text-[48px] px-10 py-4 text-black border-b-2 border-black mb-4`}>Projects</h3>
        <div className={`flex flex-row justify-center flex-wrap`}>
            {
                projects.map(project => <ProjectCard key={project.title} project={project}/>)
            }
        </div>
    </>;
}
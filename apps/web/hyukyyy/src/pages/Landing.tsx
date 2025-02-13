import Header from "@/components/template/Header.tsx";
import {useEffect} from "react";
import useLayoutStore from "@/store/LayoutStore.ts";
import Card from "@/pages/Card.tsx";

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
        <Header />
        <img src={`https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=300&section=header&text=HYUKYYY&fontSize=60&animation=fadeIn&fontColor=${isDarkMode ? 'ffffff' : '000000'}`} alt={'landing_page_svg'}/>
        <Card />
    </>;
}
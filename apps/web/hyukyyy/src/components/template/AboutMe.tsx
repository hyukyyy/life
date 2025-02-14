import H3TabTitle from "@/components/atom/H3TabTitle.tsx";
import {myInfo} from "@/contants/myInfo.ts";
import MeCard from "@/components/molecule/MeCard.tsx";

export default function AboutMe() {
    return <section>
        <H3TabTitle className={`border-none flex justify-center items-center`}>
            <span className={`text-[32px] px-4 py-2`}>
                About Me
            </span>
        </H3TabTitle>

        <div className={`flex justify-center items-center`}>
            <div className={`flex flex-row justify-between flex-wrap gap-4`}>
                {
                    myInfo.map(info => <MeCard info={info} />)
                }
            </div>
        </div>
    </section>
}
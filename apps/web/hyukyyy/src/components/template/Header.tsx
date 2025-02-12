import styled from "styled-components";
import tw from "twin.macro";
import DarkModeToggler from "@/components/organism/DarkModeToggler.tsx";
import RoundImg from "@/components/atom/RoundImg.tsx";
import {useNavigate} from "react-router-dom";
import BouncingButton from "@/components/molecule/BouncingButton.tsx";

const Wrapper = styled.div`
    ${tw`sticky top-0 h-[80px] flex items-center justify-between`};
    ${tw`duration-300`}
`

export default function Header() {
    const navigate = useNavigate();

    return <Wrapper className={`bg-gray-100 dark:bg-black`}>

        <BouncingButton className={`
            flex
            flex-row
            gap-2
            items-center
            p-2
            text-black
            dark:text-white
        `} onClick={() => navigate('/')}>
            <RoundImg src={`/profile_img.jpg`}/>
            <span >Hi! I'm HYUKYYY</span>
        </BouncingButton>

        <div className="p-2">
            <DarkModeToggler/>
        </div>
    </Wrapper>
}
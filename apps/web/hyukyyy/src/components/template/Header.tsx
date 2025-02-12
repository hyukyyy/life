import styled from "styled-components";
import tw from "twin.macro";
import DarkModeToggler from "@/components/organism/DarkModeToggler.tsx";

const Wrapper = styled.div`
    ${tw`sticky top-0 h-[80px] flex items-center justify-between`};
    ${tw`duration-300`}
`

export default function Header() {
    return <Wrapper className={`bg-gray-100 dark:bg-slate-900`}>
        <div></div>
        <div className="p-2">
            <DarkModeToggler />
        </div>
    </Wrapper>
}
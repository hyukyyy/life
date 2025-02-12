import styled from "styled-components";
import tw from "twin.macro"
import {PropsWithChildren} from "react";

interface BoxProps {
    $flag: boolean;
}

const Box = styled.div<PropsWithChildren<BoxProps>>`
    ${tw`flex justify-center items-center`};
    ${tw`w-[75px] h-[30px] rounded-lg`};
    ${tw`duration-300 ease-in`}
    ${({$flag}) => $flag && tw`translate-x-full rotate-[360deg]`};
    ${({$flag}) => $flag ? tw`text-white bg-black` : tw`text-black bg-white`};
`

interface Props {
    flag: boolean;
}

export default function TogglePositionBox({flag, children}: PropsWithChildren<Props>) {
    return <Box $flag={flag}>
        {children}
    </Box>
}
import styled from "styled-components";
import tw from "twin.macro";

const Arrow = styled.div<{$up: boolean}>`
    ${tw`w-0 h-0 border-l-[15px] border-r-[15px] border-x-transparent duration-300`}
    ${({$up}) => $up ? tw`border-b-[15px] border-b-black` : tw`border-t-[15px] border-t-black`}
`

export default Arrow;
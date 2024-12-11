import React from 'react';

import styled, { CSSProperties } from 'styled-components'
import tw from 'twin.macro'

type HexColor = `#${string}`;
type RGBColor = `rgb(${number}, ${number}, ${number})`;
type RGBAColor = `rgba(${number}, ${number}, ${number}, ${number})`;
type CSSColorName = CSSProperties['color'];

type ValidColor = HexColor | RGBColor | RGBAColor | CSSColorName;

interface DotWrapperProps {
  isActive?: boolean;
  activeColor?: ValidColor;
  inActiveColor?: ValidColor;
}

const DotWrapper = styled.div<DotWrapperProps>`
  ${tw`w-2 h-2 rounded-full`}
  background-color: ${({ inActiveColor }) => inActiveColor || '#000000'};
  
  &:hover {
    ${tw`bg-gray-700`}
  }
  
  ${({ isActive, activeColor }) => 
    isActive && `background-color: ${activeColor || '#3B82F6'};`
  }
`

export function Dot({ isActive, activeColor, inActiveColor }: DotWrapperProps) {
  return <DotWrapper isActive={isActive} activeColor={activeColor} inActiveColor={inActiveColor} />
}

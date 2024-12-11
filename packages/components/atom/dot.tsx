import React from 'react';

import styled from 'styled-components'
import tw from 'twin.macro'

interface DotWrapperProps {
  isActive?: boolean;
}

const DotWrapper = styled.div<DotWrapperProps>`
  ${tw`w-2 h-2 bg-black rounded-full`}
  
  &:hover {
    ${tw`bg-gray-700`}
  }
  
  ${({ isActive }) => 
    isActive && tw`bg-blue-500`
  }
`

export function Dot({ isActive }: DotWrapperProps) {
  return <DotWrapper isActive={isActive} />
}

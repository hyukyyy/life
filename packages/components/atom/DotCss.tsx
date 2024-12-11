import React from 'react';

interface DotProps {
  isActive?: boolean;
  activeColor?: string;
  inActiveColor?: string;
}

export function Dot({ isActive, activeColor, inActiveColor }: DotProps) {
  const style = {
    backgroundColor: isActive ? activeColor : inActiveColor
  }
  
  return (
    <div
      className={`w-2 h-2 rounded-full ${isActive ? 'bg-blue-500' : 'bg-black'} hover:bg-gray-700`}
      style={style}
    />
  )
}
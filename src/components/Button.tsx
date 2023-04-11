import React from 'react'
interface ButtonProps {
    id?: string,
    fontSize?: string
    fontWeight?: string
    height: string,
    width: string,
    textColor?: string,
    bgColor?: string,
    border?: string,
    text: string,
    onClick: () => unknown
}
function Button({
    id = 'btn',
    textColor,
    bgColor,
    border = 'primary',
    text,
    width = '118px',
    height = '40px',
    fontSize = 'base',
    fontWeight = 'medium',
    onClick
}: ButtonProps) {
    const backgroundColor = bgColor ? 'bg-' + bgColor : 'bg-primary'
    const color = textColor ? 'text-' + textColor : 'text-font-white'
    const hoverColor = bgColor ? 'hover:bg-[#F5F5F5]' : 'hover:bg-[#1d6ef0]'
    return (
        <button
            id={id}
            className={`${backgroundColor} ${color} text-${fontSize} font-${fontWeight} rounded-md shadow-sm border-[1px] border-${border} ${hoverColor}`}
            style={{ width, height }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
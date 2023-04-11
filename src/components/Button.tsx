import React from 'react'
interface ButtonProps {
    id?: string,
    height: string,
    width: string,
    textColor: string,
    bgColor: string,
    border?: string,
    text: string,
    onClick: () => unknown
}
function Button({
    id = 'btn',
    textColor = 'font-white',
    bgColor = 'primary',
    border = bgColor,
    text = 'font-white',
    width = '118px',
    height = '40px',
    onClick
}: ButtonProps) {
    return (
        <button
            id={id}
            className={`bg-${bgColor} text-${textColor} rounded-md shadow-sm border-[1px] border-${border} hover:bg-[${bgColor === 'primary' ? '#1d6ef0' : '#F5F5F5'}]`}
            style={{ width, height }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
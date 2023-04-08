import React from 'react'
interface ButtonProps {
    height: string,
    width: string,
    textColor: string,
    bgColor: string,
    text: string,
    onClick: () => unknown
}
function Button({
    textColor = 'font-white',
    bgColor = 'primary',
    text = 'font-white',
    width = '118px',
    height = '40px',
    onClick
}: ButtonProps) {
    return (
        <button
            className={`bg-${bgColor} text-${textColor} rounded-md shadow-sm`}
            style={{ width, height }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
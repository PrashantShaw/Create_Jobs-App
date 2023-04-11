import React from 'react'
interface InputTagProps {
    width?: string
    value: string
    name: string
    label: string
    error?: string
    placeholder: string
    required?: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function Input({
    value,
    onChange,
    name,
    label,
    error = '',
    width = '513px',
    required = false,
    placeholder
}: InputTagProps) {
    return (
        <div style={{ width }}>
            <label
                htmlFor={label}
                className="text-sm font-medium block mb-1"
            >
                {label || <span style={{visibility: 'hidden'}}>label</span>}{required ? <span className="text-error">*</span> : null}
            </label>
            <input
                type="text"
                id={label}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`h-[36px] px-3 py-2 text-sm border-2 border-card-border rounded-md appearance-none focus:outline-none ${error && required ? "border-error" : ""
                    }`}
                style={{ width }}
            />
            {error && required && (
                <span className="text-error text-sm">{error}</span>
            )}
        </div>
    )
}

export default Input
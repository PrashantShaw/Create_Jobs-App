import React from 'react'
interface InputTagProps {
    width?: string
    value: string
    name: string
    error: string
    placeholder: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function Input({ value, onChange, name, error, width = '513px' }: InputTagProps) {
    return (
        <div style={{width}}>
            <label
                htmlFor={name}
                className="text-sm font-medium block"
            >
                {name}<span className="text-error">*</span>
            </label>
            <input
                type="text"
                id={name}
                value={value}
                onChange={onChange}
                placeholder='ex. UX UI Designer'
                className={`h-[36px] px-3 py-2 border-2 border-card-border rounded-md appearance-none focus:outline-none ${error ? "border-red-500" : ""
                    }`}
                style={{width}}
            />
            {error && (
                <span className="text-error text-sm">{error}</span>
            )}
        </div>
    )
}

export default Input
import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
    label?: string;
    id?: string;
}

const Input = ({ id, label, ...props }: InputProps) => {
    return (
        <div className="relative">
            <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">{label}</p>
            <input
                id={id}
                {...props}
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300"
            />
        </div>
    )
}

export default Input

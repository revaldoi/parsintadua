import { useEffect, useRef } from "react";

const InputRef = ({ isFocused = false, type = 'text', ...props}) => {
    const InputRef = useRef()

    useEffect(() => {
        if (isFocused) {
            InputRef.current.focus()
        }
    }, []);

    return (
        <input 
            ref = {InputRef}
            {...props} 
            className={'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'} type={type} 
        />
    
    )

}

export default InputRef;
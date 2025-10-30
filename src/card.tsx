import { useState } from 'react'

type Props = {
    title: string
    text: string
    src: string
    
}

const Card = ({title, text, src}: Props) => {
    const [showAlert, setShowAlert] = useState(false)
    const handleClick = () => {
        setShowAlert(true)
    }
    const closeAlert = () => {
        setShowAlert(false)
    }
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return(
        <>
            <div
                onClick={handleClick}
                className="border-2 border-gray-500 rounded-3xl h-80 w-80 overflow-hidden hover:cursor-pointer hover:shadow-2xl transform-gpu hover:scale-105 transform transition-all duration-200 origin-center">
                <div className="h-50 overflow-hidden">
                    <img className="w-full group-hover:scale-105 transform transition-all duration-200"
                        src={src}
                        alt={title}/>
                </div>
                <h2 className="text-2xl font-medium ml-12 mt-2 group-hover:scale-105 transform transition-all duration-200">{title}</h2>
                <p className="ml-12 mt-2 group-hover:scale-105 transform transition-all duration-200">Look at this {text}</p>
            </div>
            
            {showAlert && (
                <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-[40%] h-[50%] p-8 shadow-xl">
                        <h2 className="text-xl font-bold mb-4">
                            {title} counter
                        </h2>
                        <div className='flex flex-col justify-center items-center w-full gap-6 my-16'>
                            <h2 className='flex justify-center items-center border rounded-2xl bg-gray-200 w-24 h-12 text-2xl font-medium'>
                                {count}
                            </h2>
                            <div className='flex gap-6'>
                                <button 
                                    onClick={decrement}
                                    className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white text-2xl font-medium w-12 h-10 pb-1 rounded hover:cursor-pointer">
                                    -
                                </button>
                                <button 
                                    onClick={increment}
                                    className='flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white text-2xl font-medium w-12 h-10 pb-1 rounded hover:cursor-pointer'>
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={closeAlert}
                            className="relative bottom-1 left-1 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded hover:cursor-pointer">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
export default Card;
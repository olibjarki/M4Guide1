import { useState } from "react";

type Props = {
    title: string
    variant?: 'cyan' | 'red' | 'green' | 'purple' | 'yellow' | 'gray'
    alertMessage?: string
}

const Button = ({ title, variant = 'cyan', alertMessage }: Props) => {
    const [showAlert, setShowAlert] = useState(false)
    const handleClick = () => {
    setShowAlert(true)
    }
    const closeAlert = () => {
        setShowAlert(false)
    }
    const colorVariants = {
        cyan: 'bg-cyan-500 hover:bg-cyan-300',
        red: 'bg-red-500 hover:bg-red-300',
        green: 'bg-green-500 hover:bg-green-300',
        purple: 'bg-purple-500 hover:bg-purple-300',
        yellow: 'bg-yellow-500 hover:bg-yellow-300',
        gray: 'bg-gray-500 hover:bg-gray-300',
    }

    return (
        <>
        <div 
            onClick={handleClick}
            className={`flex justify-center items-center w-40 h-12 border-2 rounded-full hover:cursor-pointer transition-colors duration-150 ${colorVariants[variant]}`}>
            <button className="hover:cursor-pointer">
                <p className="font-medium text-2xl">{title}</p>
            </button>
        </div>

        {showAlert && (
                <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full mx-4">
                        <h3 className="text-xl font-bold mb-4">Alert</h3>
                        <p className="text-gray-700 mb-6">
                            {alertMessage || `You clicked ${title}!`}
                        </p>
                        <button
                            onClick={closeAlert}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded hover:cursor-pointer">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
export default Button;
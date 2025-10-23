

type Props = {
    title: string
    variant?: 'cyan' | 'red' | 'green' | 'purple' | 'yellow' | 'gray'
}

const Button = ({ title, variant = 'cyan' }: Props) => {
    const colorVariants = {
        cyan: 'bg-cyan-500 hover:bg-cyan-300',
        red: 'bg-red-500 hover:bg-red-300',
        green: 'bg-green-500 hover:bg-green-300',
        purple: 'bg-purple-500 hover:bg-purple-300',
        yellow: 'bg-yellow-500 hover:bg-yellow-300',
        gray: 'bg-gray-500 hover:bg-gray-300',
    }

    return (
        <div className={`flex justify-center items-center w-40 h-12 border-2 rounded-full hover:cursor-pointer transition-colors duration-150 ${colorVariants[variant]}`}>
            <button className="hover:cursor-pointer">
                <p className="font-medium text-2xl">{title}</p>
            </button>
        </div>
    )
}
export default Button;
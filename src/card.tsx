type Props = {
    title: string
    text: string
    src: string
}

const Card = ({title, text, src}:Props) => {
    return(
        <>
            <div className="border-2 border-gray-500 rounded-3xl h-80 w-80 overflow-hidden hover:cursor-pointer hover:shadow-2xl transform-gpu hover:scale-105 transform transition-all duration-200 origin-center">
                <div className="h-50 overflow-hidden">
                    <img className="w-full group-hover:scale-105 transform transition-all duration-200" 
                        src={src}
                        alt={title}/>
                </div>
                <h2 className="text-2xl font-medium ml-12 mt-2 group-hover:scale-105 transform transition-all duration-200  ">{title}</h2>
                <p className="ml-12 mt-2  group-hover:scale-105 transform transition-all duration-200">Look at this {text}</p>
            </div>
        </>
    )
}
export default Card;
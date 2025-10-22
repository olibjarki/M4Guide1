const Card = () => {
    return(
        <>
            <div className="border-2 border-gray-500 rounded-3xl h-80 w-80 overflow-hidden hover:cursor-pointer hover:shadow-2xl transform-gpu hover:scale-105 transform transition-all duration-200 origin-center">
                <div className="h-50 overflow-hidden">
                    <img className="w-full group-hover:scale-105 transform transition-all duration-200" 
                        src="https://media.tenor.com/ufoEKwfMGEoAAAAM/fish-silly-fish.gif" 
                        alt="Funny fish" />
                </div>
                <h2 className="text-2xl font-medium ml-12 mt-2 group-hover:scale-105 transform transition-all duration-200  ">Funny Fish</h2>
                <p className="ml-12 mt-2  group-hover:scale-105 transform transition-all duration-200">Look at this funny fish</p>
            </div>
        </>
    )
}
export default Card;
const Button = ()=>{
    return(
        <>
            <div className="flex justify-center items-center bg-cyan-500 w-40 h-12 border-2 rounded-full hover:bg-black hover:text-cyan-500 hover:cursor-pointer">
                <button className="hover:cursor-pointer">
                    <p className="font-medium text-2xl">Click me!</p>
                </button>
            </div>
        </>
    )
}
export default Button;
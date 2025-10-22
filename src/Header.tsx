import Search from "./search-bar";

const Header = () => {
    return(
        <div className="flex justify-center items-center bg-orange-500 h-16">
            <div className="absolute left-8 text-2xl font-bold hover:text-white hover:cursor-pointer">
                LOGO
            </div>
            <h1 className="text-3xl">
                This is our header!
            </h1>
            <div className="absolute right-16">
                <Search/>
            </div>
        </div>
    )
}
export default Header;
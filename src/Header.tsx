import { useState } from "react";
import Search from "./search-bar";

type Props ={
    Greeting: string
    Person: string
}

const Header = ({Greeting, Person}:Props) => {
    const [Verries, setVerries] = useState("");
    const addVery = () => {
        setVerries(Verries + " very");
    }

    return(
        <div className="flex justify-center items-center bg-orange-500 h-16">
            <div className="absolute left-8 text-2xl font-bold hover:text-white hover:cursor-pointer">
                LOGO
            </div>
            <button 
                onClick={addVery}
                className="absolute left-40 border-2 bg-cyan-500 px-4 py-2 rounded-full hover:bg-cyan-300 hover:cursor-pointer">
                Click me
            </button>
            <h2 className="absolute left-72 text-xl">
                I am {Verries} happy!
            </h2>

            <h1 className="text-3xl font-medium">
                {Greeting} {Person}!
            </h1>

            <div className="absolute right-16">
                <Search/>
            </div>
        </div>
    )
}
export default Header;
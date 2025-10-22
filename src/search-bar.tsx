const Search = () => {
    return(
        <>
        <div>
            <img 
                src="https://www.svgrepo.com/show/356535/search-button.svg" 
                alt="Search icon" 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4"/>
            <input 
                type="text" 
                placeholder="Leita"
                className="bg-gray-100 border-2 rounded-2xl w-80 h-8 pl-8 focus:outline-none focus:ring-0"/>
        </div>
        </>
    )
}
export default Search;

//https://static.thenounproject.com/png/1594157-200.png
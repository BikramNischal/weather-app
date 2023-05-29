import {useEffect, useState} from "react";


const Search = ({onSearchChange}) =>{

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return(
        <h1>hello World</h1>
    )
}

export default Search;
// placeholder="Search Citys" debounceTimeout = {600} value = {search} onChange= {handleOnChange} 
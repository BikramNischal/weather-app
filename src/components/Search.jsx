import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";


export default function Search(props) {
    const [searchKey, setSearchKey] = useState("");
    const [searchResult, setSearchReuslt] = useState(false);
    const [location, setLocation] = useState("");


    function handleInputClick(event){
        setSearchKey("");
        setSearchReuslt(false);
    }

    function handleClick() {
        setLocation(searchKey);
        setSearchReuslt(true);
    }

    if (searchResult){
        return (
            <div>
                <div>
                    <input type="text" id="search-bar" placeholder="Location" 
                        onChange={e => setSearchKey(e.target.value)}
                        onClick={handleInputClick} value={searchKey} 
                        className="h-[50px] bg-blue-100 px-10 rounded-3xl " />
                    <button onClick={handleClick}>search</button>
                </div>
                <SearchResult 
                    result={location} 
                    location={props.location} 
                    updateLocation={props.updateLocation} />
            </div>
        );
    }
    else {
        return (
            <div>
                <div>
                    <input type="text" id="search-bar" placeholder="Location" 
                        onChange={e => setSearchKey(e.target.value)}
                        value={searchKey}
                        className="h-[50px] bg-blue-100 px-10 rounded-3xl " />
                    <button onClick={handleClick}>search</button>
                </div>
            </div>
        );
    }

}

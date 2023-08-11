import React, {useState} from 'react';

function SearchBar(props){
    const [phrase, setPhrase] = useState("");

    const handlePhraseChange = (event) => {
        setPhrase(event.target.value);
    }

    return (
        <div className="SearchBar">
            <input placeholder='Enter a song, album or artist'onChange={handlePhraseChange}/>
            <button className="SearchButton" onClick={props.onSearch}>Search</button>
        </div>
    )
}

export default SearchBar;

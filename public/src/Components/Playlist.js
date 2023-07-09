import React, {useState} from 'react';
import Tracklist from './Tracklist';

function Playlist(){
    const [playListName, setPlayListName] = useState('');

    return (
        <div className="Playlist">
            <h2>{playListName}</h2>
            <Tracklist/>
            <button className="Playlist-save">Save To Spotify</button>
        </div>
    )
}

export default Playlist;

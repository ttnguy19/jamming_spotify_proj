import React from 'react';
import Tracklist from './Tracklist';

function Playlist(props){
    return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <Tracklist
        tracks={props.playlistTracks}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
    )
}

export default Playlist;

import React from 'react';
import Tracklist from './Tracklist';

function Playlist(props){

  //Call handleNameChange from parent component App
  const handleChange = (event) =>{
    props.onNameChange(event.target.value);
  }

    return (
    <div className="Playlist">
      <input 
        defaultValue={"New Playlist"}
        onChange={handleChange} />
      <Tracklist
        tracks={props.playlistTracks}
      />
      <button 
        className="Playlist-save"
        onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
    )
}

export default Playlist;

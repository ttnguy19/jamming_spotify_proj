import React from 'react';
import Track from './Track';

function Tracklist(props){
    if (!Array.isArray(props.tracksList)) {
        return null; 
      }
    return (
        <div className="Track-list">
           {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
          />
        );
      })}
        </div>
    )
}

export default Tracklist;

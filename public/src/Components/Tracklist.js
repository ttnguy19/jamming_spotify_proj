import React from 'react';
import Track from './Track';

function Tracklist(props){
    var tracks=[];
    if (!props.tracks) {
        tracks=[];
      } else {
        tracks = props.tracks;
      }
    return (
        <div className="Track-list">
           {tracks.map((track) => {
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

import React from 'react';
import Track from './Track';

function Tracklist(props){
  
    //handle empty/null tracks input
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
            onAdd={props.onAdd}
            removable={false}
            onRemove={props.onRemove}
          />
        );
      })}
        </div>
    )
}

export default Tracklist;

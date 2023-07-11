import React from 'react';

function Track(props){
    return (
        <div className="Track">
            <div className="Track Information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className="Track Action">+</button>
        </div>
    );
}

export default Track;


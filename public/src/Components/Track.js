import React from 'react';

function Track(props){

    //Use onAdd function from parent components
    const addTrack = () =>{
        //Deal with bug when no function is passed in
        if (typeof props.onAdd === 'function') {
            props.onAdd(props.track);
          }
    }
    //Use onRemove function from parent components
    const removeTrack = () => {
        props.onRemove(props.track.id);
    }

    //IMPORTANT: render button accordance to whether the track is removal or not to avoid addTrack or removeTack from being
    //undefined
    const renderButton = () => {
        if (props.removable) {
          return (
            <button className="Track-action" onClick={removeTrack}>-</button>
          );
        }
        return (
          <button className="Track-action" onClick={addTrack}>+</button>
        );
      };
    
    
    return (
        <div className="Track">
            <div className="Track Information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderButton()}
        </div>
    );
}

export default Track;


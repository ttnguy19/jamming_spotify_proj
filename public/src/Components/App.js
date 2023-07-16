import React, {useState} from 'react';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const tracks = [
  {
    id: '1',
    name: 'name#1',
    artist: 'artist#1',
    album: 'album#1',
    uri: 'uri#1'
  },
  {
    id: '2',
    name: 'name#2',
    artist: 'artist#2',
    album: 'album#2',
    uri: 'uri#2'
  }
];

function App() {
  const [searchResults,setSearchResults]=useState([]);
  const [playListName, setPlayListName]=useState('New Playlist');
  const [playListTracks,setPlayListTracks] = useState(tracks);


  //Function to save playlist 
  const savePlaylist = () =>{
    const uriNum = playListTracks.map((track) => track.uri); //uriNum is of type array
    //console.log(uriNum); test
  };

  //Function to add track playlist 
  const addTrack = (track) =>{
    //If a track already exists, do not add duplicate, else add track to existing playlsit
    if (playListTracks.some((savedTrack)=> savedTrack.id === track.id)) return;

    setPlayListTracks(prevPlayList => [track, ...prevPlayList]);
  }

  //Function to save new Playlist name
  const handleNameChange = (name) =>{
    setPlayListName(name);
  };

  //Function to remove a track
  const handleRemoveTrack = (trackID) =>{
    setPlayListTracks((prevTrackList) => prevTrackList.filter((track) => track.id !== trackID));
  }


  return (
    <div>
      <h1></h1>
      <div className='App'>
        <SearchBar/>
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} onAdd={addTrack}/>
        <h3>Playlist</h3>
        <Playlist
           playlistName={playListName}
           playlistTracks={playListTracks}
           onSave={savePlaylist}
           onNameChange={handleNameChange}
           onRemoveTrack={handleRemoveTrack}
          />
      </div>
      </div>
    </div>
  );
}


export default App;
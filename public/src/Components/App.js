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
  const [searchResult,setSearchResult]=useState([]);
  const [playListName, setPlayListName]=useState('New Playlist');
  const [playListTracks,setPlayListTracks] = useState(tracks);

  return (
    <div>
      <h1></h1>
      <div className='App'>
        <SearchBar/>
      <div className="App-playlist">
        <SearchResults searchResult={searchResult}/>
        <Playlist
           playlistName={playListName}
           playlistTracks={playListTracks}
          />
      </div>
      </div>
    </div>
  );
}

export default App;

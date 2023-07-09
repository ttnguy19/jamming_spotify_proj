import React from 'react';
import { Button } from 'react-native-web';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  return (
    <div>
      <SearchBar/>
      <div className="App-playlist">
        <SearchResults/>
        <Playlist/>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
const tempMusicData = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];
const tempPlaylist = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];

function App() {
  const [musics, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };
  return (
    <div>
      <Nav />
      <div className="container">
        <MusicList/>
        <Playlist/>
        

      </div>
    </div>
  );
}

export default App;

function Nav() {
  const [query, setQuery] = useState("");
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Music App</h1>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

function MusicList(props){
  const music = tempMusicData;
  return (
    <div className="container">
          <h2>Music List</h2>
      
          <ul>
            {music.map((music) => (
              <li key={music.id}>
                {music.title} by {music.artist} ({music.genre})
                <button>♥️</button>
              </li>
            ))}
          </ul>
        </div>
  )
}

function Playlist(){
  const playlist = tempPlaylist
  return(
    <div className="container">
          <h2>Playlist</h2>
          <ul>
            {playlist.map((music) => (
              <li key={music.id}>
                {music.title} by {music.artist}
              </li>
            ))}
          </ul>
        </div>
  )
}
import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';


export default function Playlist({playlistTracks,playlistName,onRemove,onNameChange,onSave}){
    const handleNameChange = ({ target }) => onNameChange(target.value);
    return (
      <div className="Playlist">
        <input defaultValue={playlistName} onChange={handleNameChange} />
        <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
        <button className="Playlist-save" onClick={onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
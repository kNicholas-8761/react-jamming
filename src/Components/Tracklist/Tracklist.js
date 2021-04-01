import React from 'react';

import './Tracklist.css';

import Track from '../Track/Track';
export default function TrackList({ tracks, onAdd, isRemoval, onRemove }) {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}
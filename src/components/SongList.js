import React, { Component } from 'react';

class SongList extends Component {
  render() {
    return (
      <ul className="slds-has-dividers_bottom">
        {this.props.songs.map(song => (
          <li className="slds-item" key={song.id}>
            <p>{song.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default SongList;

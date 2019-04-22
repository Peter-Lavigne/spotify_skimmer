import React, { Component } from 'react';
import VerticalList from './VerticalList';
import Title from './Title';

class Authorize extends Component {
  base = 'https://accounts.spotify.com/authorize';
  clientId = 'e467763bad6744f8af96818bf087748b';
  // redirectUri = 'http:%2F%2Flocalhost:3000%2Fapp';
  redirectUri = 'http:%2F%2Fspotify-skimmer.surge.sh%2Fapp';
  scope = 'user-modify-playback-state user-read-currently-playing user-read-playback-state';
  queryParams = `client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scope}&response_type=token`;

  authenticationUrl = `${this.base}?${this.queryParams}`;

  render() {
    return (
      <VerticalList>
        <Title />
        <a href={this.authenticationUrl}>Authenticate</a>
      </VerticalList>
    );
  }
}

export default Authorize;

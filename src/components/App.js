import React, { Component } from 'react';
import queryString from 'query-string';
import SongList from './SongList';
import ControlButtons from './ControlButtons';
import VerticalList from './VerticalList';
import Title from './Title';
import ShortcutsInput from './ShortcutsInput';

class App extends Component {
  spotifyAccessToken = queryString.parse(this.props.location.hash).access_token;

  state = {
    liked: [],
    disliked: []
  };

  makeApiRequest(method, url) {
    return fetch(url, {
      method,
      headers: new Headers({
        'Authorization': 'Bearer ' + this.spotifyAccessToken
      })
    });
  }

  getCurrentlyPlayingSong() {
    return this.makeApiRequest(
      'get',
      'https://api.spotify.com/v1/me/player/currently-playing'
    ).then(response => response.json())
     .then(data => data.item);
  }

  passJudgement(judgement) {
    return this.getCurrentlyPlayingSong().then(song => {
      this.setState({
        [judgement]: [...this.state[judgement], song]
      });
      return this.skip();
    }).then(() => this.seek())
  }

  // seek to 2:10, the high point of all songs
  seek() {
    const ms = (2 * 60 + 10) * 1000;
    return this.makeApiRequest(
      'put',
      `https://api.spotify.com/v1/me/player/seek?position_ms=${ms}`
    );
  };

  skip() {
    return this.makeApiRequest(
      'post',
      'https://api.spotify.com/v1/me/player/next'
    );
  };

  previous() {
    this.makeApiRequest(
      'post',
      'https://api.spotify.com/v1/me/player/previous'
    );
  };

  like() {
    this.passJudgement('liked');
  };

  dislike() {
    this.passJudgement('disliked');
  };

  render() {
    return (
      <VerticalList>
        <Title />
        <div className="slds-p-bottom_large">
          <ShortcutsInput shortcuts={[
            { key: 'l', onPress: () => this.like() },
            { key: 'p', onPress: () => this.previous() },
            { key: 'e', onPress: () => this.seek() },
            { key: 's', onPress: () => this.skip() },
            { key: 'd', onPress: () => this.dislike() },
          ]}/>
        </div>
        <div className="slds-p-bottom_medium">
          <ControlButtons buttons={[
            { text: '(L)ike', onClick: () => this.like() },
            { text: '(P)revious', onClick: () => this.previous() },
            { text: 'S(e)ek', onClick: () => this.seek() },
            { text: '(S)kip', onClick: () => this.skip() },
            { text: '(D)islike', onClick: () => this.dislike() },
          ]}/>
        </div>
        <p>Total: {this.state.liked.length + this.state.disliked.length}</p>
        <ul className="slds-list_horizontal">
          <li className="slds-size_1-of-3">
            <p className="slds-text-color_success slds-border_bottom slds-text-heading_small slds-p-around_medium">
              Liked Songs
            </p>
            <SongList songs={this.state.liked}/>
          </li>
          <li className="slds-size_1-of-3" />
          <li className="slds-size_1-of-3">
            <p className="slds-text-color_error slds-border_bottom slds-text-heading_small slds-p-around_medium">
              Disliked Songs
            </p>
            <SongList songs={this.state.disliked}/>
          </li>
        </ul>
      </VerticalList>
    );
  }
}

export default App;

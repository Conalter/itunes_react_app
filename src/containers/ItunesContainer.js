import React from 'react';
import ArtistList from "../components/ArtistList.js";

export default class ItunesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      artist: [],
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({artist: json.feed.entry}));
  }

  render(){
    return (
      <div>
        <h1>iTunes Top 20 Singles</h1>
        <ArtistList
          artists={this.state.artist}
        />
      </div>
    );
  }

}

import React from 'react';


const ArtistList = (props) => {

  const artistList = props.artists.map((artist, index) => {
    return(
      <ul key={artist.id.attributes["im:name"].label}>
        {/* <li>Artist {index}: {artist.label}</li> */}
      </ul>
    );
  });

  return(
    <div>
      {artistList}
    </div>
  )

}

export default ArtistList;

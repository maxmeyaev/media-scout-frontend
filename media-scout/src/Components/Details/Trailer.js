import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const opts = {
  height: '500',
  width: '800',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
export default function Trailer ({ movieId }) {
  const [video, setVideo] = useState([]);
  const fetchTrailers = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`);
    setVideo(data.results[0].key);
  };
  useEffect(() => {
    fetchTrailers();
  }, []);
  return <YouTube videoId={video} opts={opts} />;
}

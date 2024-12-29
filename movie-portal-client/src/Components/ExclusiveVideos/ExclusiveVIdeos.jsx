import React, { useContext } from 'react';
import { ThemeContext } from '../../Provider/ThemeProvider';

const VideoCard = ({ videoUrl, title, description }) => {
  // Extracting the video ID from the video URL for the iframe embed
  const videoId = videoUrl.split('v=')[1].split('&')[0]; 

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-[315px]">
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${videoId}`} 
          title={title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-body">
        <h3 className="card-title text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </button>
        </div>
      </div>
    </div>
  );
};

const ExclusiveVideos = () => {
  const { theme} = useContext(ThemeContext);
  const videos = [
    {
      videoUrl: 'https://www.youtube.com/watch?v=iV46TJKL8cU', 
      title: 'Disney’s Snow White | Official Trailer | In Theaters March 21',
      description: 'From the producer and executive producer of “Wicked,” Marc Platt and Jared LeBoff, and director Marc Webb (“The Amazing Spider-Man”) comes Disney’s Snow White'
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=ZBzG3sspBzA',
      title: 'Mission: Impossible – The Final Reckoning | Teaser Trailer | Paramount Pictures UK',
      description: 'Our lives are the sum of our choices. Mission: Impossible – The Final Reckoning trailer is here. See you at the movies May 2025.',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=5lzoxHSn0C0',
      title: 'How To Train Your Dragon | Official Teaser Trailer',
      description: 'From three-time Oscar® nominee and Golden Globe winner Dean DeBlois, the creative visionary behind DreamWorks Animation’s acclaimed How to Train Your Dragon trilogy, comes a stunning live-action reimagining of the film that launched the beloved franchise.',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y',
      title: 'Captain America: Brave New World | Official Trailer',
      description: 'Anthony Mackie and Harrison Ford star in Marvel Studios’ Captain America: Brave New World. Watch the brand-new trailer and experience it only in theaters February 14.',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=0FSwsrFpkbw&t=2s',
      title: 'From the World of John Wick: Ballerina (2025) Official Trailer - Ana de Armas',
      description: 'From the World of John Wick: Ballerina – in theaters June 6! Starring Ana de Armas, Anjelica Huston, Gabriel Byrne, Lance Reddick, Catalina Sandino Moreno, Norman Reedus, with Ian McShane, and Keanu Reeves.',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=hdUHcfU9hFU',
      title: 'Kraven the Hunter | Official Trailer | Experience It In IMAX®',
      description: 'Kraven the Hunter is the action-packed, R-rated, standalone story of how one of Marvel’s most iconic villains came to be. Aaron Taylor-Johnson plays Kraven, a man whose complex relationship with his ruthless gangster father, Nikolai Kravinoff (Russell Crowe), starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world',
    },
  ];

  return (
    <div className={`p-8 mx-auto w-11/12 my-8 rounded-2xl
      ${
        theme === "light" ? "bg-gray-100" : "bg-gray-800"}
    `}>
      <h2 className={`text-4xl font-bold text-left border-l-4 pl-4
        ${
          theme === "light" ? "text-black border-black" : "text-white border-white"}
        `}>Coming Soon to theaters</h2>
      <h5 className={`text-xl font-normal text-left mb-8 border-black border-l-4 pl-4
      ${
          theme === "light" ? "text-black border-black" : "text-white border-white"}`}>Trailers for upcoming releases</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard 
            key={index} 
            videoUrl={video.videoUrl}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExclusiveVideos;

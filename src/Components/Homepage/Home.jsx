import React, { useRef, useEffect } from "react";
import "./style.css";
import video from "./Video.mp4";
import Poster from "./Poster.png";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
      videoElement.pause();
      videoElement.style.display = "none";
      document.getElementById("poster").style.display = "block";
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  const handlePlayClick = () => {
    const videoElement = videoRef.current;
    document.getElementById("poster").style.display = "none";
    videoElement.style.display = "block";
    videoElement.play();
  };

  return (
    <div>
      <video ref={videoRef} width="100%" height="90%" controls>
        <source src={video} type="video/mp4" />
      </video>
      <div id="poster" style={{ position: "relative", display : "none" }}>
        <img src={Poster} alt="Poster" className="home-image" />
        <a href="./Game" className="play btn" onClick={handlePlayClick}>
          Play
        </a>
      </div>
    </div>
  );
};

export default Home;

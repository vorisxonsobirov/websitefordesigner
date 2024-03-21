import React, { useState } from 'react';
import "./packages.css";
import youtube from "../../assets/of7bqAE8DmXlaFfWLukXXbupvlg.jpg"
// import video1 from "../../assets/video1.mp4";
// import video2 from "../../assets/video2.mp4";
// import video3 from "../../assets/video3.mp4";
// import video4 from "../../assets/video4.mp4";

const Packages = () => {
  const [showFullWindow, setShowFullWindow] = useState(false);

  const toggleFullWindow = () => {
    setShowFullWindow(!showFullWindow);
  };

  return (
    <div className='container'>
      {showFullWindow && (
        <div className="full-window">
          <div className="video-grid">
            <div className="video-item">
              <video controls>
                <source src="{video1}" type="video/mp4" />
              </video>
            </div>
            <div className="video-item">
              <video controls>
                <source src="{video2}" type="video/mp4" />
              </video>
            </div>
            <div className="video-item">
              <video controls>
                <source src="{video3}" type="video/mp4" />
              </video>
            </div>
            <div className="video-item">
              <video controls>
                <source src="{video4}" type="video/mp4" />
              </video>
            </div>
          </div>
          <button className="close-button" onClick={toggleFullWindow}>X</button>
        </div>
      )}
      <div className="holder_backages mt100">
        <div className="card" onClick={toggleFullWindow}>
          <div className="card-header">
            <h2>Reels format</h2>
          </div>
          <div className="card-image">
            <img src={youtube} alt="" />
          </div>
          <div className="card-info">
            <p>Short videos with a simple storyline for social networks</p>
            <div className="btns">
              <button>$290 per 1pc</button>
              <button> Examples</button>
            </div>
          </div>
        </div>
        <div className="card" onClick={toggleFullWindow}>
          <div className="card-header">
            <h2>Reels format</h2>
          </div>
          <div className="card-image">
            <img src={youtube} alt="" />
          </div>
          <div className="card-info">
            <p>Short videos with a simple storyline for social networks</p>
            <div className="btns">
              <button>$290 per 1pc</button>
              <button> Examples</button>
            </div>
          </div>
        </div>
        <div className="card" onClick={toggleFullWindow}>
          <div className="card-header">
            <h2>Reels format</h2>
          </div>
          <div className="card-image">
            <img src={youtube} alt="" />
          </div>
          <div className="card-info">
            <p>Short videos with a simple storyline for social networks</p>
            <div className="btns">
              <button>$290 per 1pc</button>
              <button> Examples</button>
            </div>
          </div>
        </div>
        <div className="card" onClick={toggleFullWindow}>
          <div className="card-header">
            <h2>Reels format</h2>
          </div>
          <div className="card-image">
            <img src={youtube} alt="" />
          </div>
          <div className="card-info">
            <p>Short videos with a simple storyline for social networks</p>
            <div className="btns">
              <button>$290 per 1pc</button>
              <button> Examples</button>
            </div>
          </div>
        </div>
      </div>
      <div className="holder_backages mt100">
        <div className="card" onClick={toggleFullWindow}>
          <div className="card-header">
            <h2>Reels format</h2>
          </div>
          <div className="card-image">
            <img src={youtube} alt="" />
          </div>
          <div className="card-info">
            <p>Short videos with a simple storyline for social networks</p>
            <div className="btns">
              <button>$290 per 1pc</button>
              <button> Examples</button>
            </div>
          </div>
        </div>
        <div className="card" onClick={toggleFullWindow}>
          <div className="card-header">
            <h2>Reels format</h2>
          </div>
          <div className="card-image">
            <img src={youtube} alt="" />
          </div>
          <div className="card-info">
            <p>Short videos with a simple storyline for social networks</p>
            <div className="btns">
              <button>$290 per 1pc</button>
              <button> Examples</button>
            </div>
          </div>
        </div>
        <div className="card" onClick={toggleFullWindow}>
          <div className="card-header">
            <h2>Reels format</h2>
          </div>
          <div className="card-image">
            <img src={youtube} alt="" />
          </div>
          <div className="card-info">
            <p>Short videos with a simple storyline for social networks</p>
            <div className="btns">
              <button>$290 per 1pc</button>
              <button> Examples</button>
            </div>
          </div>
        </div>
        <div className="card" onClick={toggleFullWindow}>
          <div className="card-header">
            <h2>Reels format</h2>
          </div>
          <div className="card-image">
            <img src={youtube} alt="" />
          </div>
          <div className="card-info">
            <p>Short videos with a simple storyline for social networks</p>
            <div className="btns">
              <button>$290 per 1pc</button>
              <button> Examples</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;

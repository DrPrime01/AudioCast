import Navbar from "./Navbar";
import "./Hero.css";
import MusicWave from "../Assets/Images/MusicWave.png";

function Hero() {
  return (
    <div className="hero">
      <div className="navbar-box">
        <Navbar className="navbar" />
      </div>
      <div id="image-text">
        <div className="hero-text">
          <div className="text">
            <h1>Listen To Your Favorite Audiocast Here!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
              tortor at euismod ullamcorper. Consectetur velit eget at quam.
            </p>
            <div className="buttons">
              <span>
                <button className="btn get-started">Get started</button>
              </span>
              <span>
                <button className="btn btn-outline">Learn more</button>
              </span>
            </div>
            <div className="three-circles">
              <div className="three-circles-container">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>
              <div className="circle-text">
                <span className="text-1">200k</span>
                <span className="text-2">worldwide listeners</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image">
            <div className="musicwave">
              <img
                src={MusicWave}
                alt="hero image"
                className="frequency-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

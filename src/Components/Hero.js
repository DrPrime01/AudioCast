import Navbar from "./Navbar";
import './Hero.css';

function Hero() {
    return (
        <div className="hero">
            <Navbar />
            <div className="hero-text"></div>
            <div className="hero-image"></div>
        </div>
    )
}

export default Hero;
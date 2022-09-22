import "./Footer.css";
import FacebookIcon from "../Assets/Icons/FacebookIcon.svg";
import TwitterIcon from "../Assets/Icons/TwitterIcon.svg";
import InstagramIcon from "../Assets/Icons/InstagramIcon.svg";


function Footer() {

  const navlink = ["Features", "About Us", "Contact Us", "Follow Us"];
  const navlinkItems = navlink.map((navlinkItem, i) => {
    return (
      <li key={i} className="navlink-item">
        <a href="#" className="navlink">
          {navlinkItem}
        </a>
      </li>
    );
  });

  return (
    <>
    <nav className="footer-container">
      <div className="logo">
        <span className="audio">Audio</span>
        <span className="cast">Cast</span>
      </div>
      <ul className="footer-navlinks">{navlinkItems}</ul>
      <div className="social-media">
        <img src={TwitterIcon} alt="TwitterIcon" className="sm-icon" />
        <img src={FacebookIcon} alt="FacebookIcon" className="sm-icon" />
        <img src={InstagramIcon} alt="InstagramIcon" className="sm-icon" />
      </div>
    </nav>
    <div className="copyright">Copyright 2022</div>
    </>
  )
}

export default Footer

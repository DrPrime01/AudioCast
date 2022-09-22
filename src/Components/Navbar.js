import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  let navlink = ["Home", "Features", "About Us"];
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
    <nav className="navbar-container">
      <div className="logo">
        <span className="audio">Audio</span>
        <span className="cast">Cast</span>
      </div>
      <ul className="navbar-navlinks">{navlinkItems}</ul>
      <div className="searchbar-container">
        <form className="searchbar-form">
          <input
            type="search"
            className="searchbar-input"
            placeholder="Search"
          />
          <button type="submit" className="searchbar-button">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;

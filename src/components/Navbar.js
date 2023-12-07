import { Link } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar() {
    return (
      <div className="navbar">
        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="/work"> Work </Link>
          <Link to="/twitch"> Twitch </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
    );
}

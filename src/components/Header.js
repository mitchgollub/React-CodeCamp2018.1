import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => (
  <header>
    <nav>
      <ul className="topNav">
        <li>
          <Link to="/">Camp</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/session">Session</Link>
        </li>
        <li>
          <Link to="/speaker">Speaker</Link>
        </li>
        <li>
          <Link to="/sponsor">Sponsor</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

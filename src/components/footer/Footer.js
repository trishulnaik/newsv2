import "./footer.css";
import LogoHeader from "../NavBar/LogoHeader";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer-card">
        <div className="footer-col">
          <Link to="/" className="link">
            <LogoHeader />
          </Link>

          <p style={{ marginTop: "30px" }}>
            We like you to be informed in the best and fastest way possible
          </p>
        </div>
        <div className="footer-col">
          <h2>Explore</h2>
          <ul className="list-style">
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/section/world" className="link">
              <li>World</li>
            </Link>

            <Link to="/section/politics" className="link">
              <li>Politics</li>
            </Link>
            <Link to="/section/technology" className="link">
              <li>Technology</li>
            </Link>
            <Link to="/section/business" className="link">
              <li>Business</li>
            </Link>
            <Link to="/section/health" className="link">
              <li>Health</li>
            </Link>
          </ul>
        </div>
        <div className="footer-col">
          <h2>About US</h2>
          <ul className="list-style">
            <Link to="/team7" className="link">
              <li>Team-7</li>
            </Link>

            <Link to="/admin/auth" className="link">
              <li>ADMIN</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        <h4 style={{ margin: 0 }}>
          &copy;2021 Daily Chronicles, All rights reserved
        </h4>
      </div>
    </div>
  );
};
export default Footer;

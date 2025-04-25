import "./Home.css";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <img
            src={profileImage}
            alt="ProfileImage"
            className="profile-image"
          />
          <div className="divider"></div>
          <h2>Tolga Uslu </h2>
          <h1> Junior Fullstack Developer based in Amsterdam</h1>
          <p>
            I am a <strong>junior fullstack developer </strong>looking for a new
            adventure.
          </p>
          <div className="button-group">
            <Link to="/projects" className="modern-cta">
              View my projects <FiArrowRight />
            </Link>
            <a href="/cv.pdf" download className="modern-cta outline">
              Download CV <FiDownload />
            </a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Tolga0342" target="_blank">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tolga-u-8995b2226" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

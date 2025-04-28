import "./About.css";
import profileImg from "../assets/profile.jpg";
import vscodeImg from "../assets/VsCode.png";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiNodedotjs,
  SiSqlite,
  SiPrisma,
  SiPostman,
} from "react-icons/si";

export const About = () => {
  return (
    <section className="about-section ">
      <div className="about-container fade-in-up">
        <div className="about-image">
          <img src={profileImg} alt="About me" />
        </div>

        <div className="about-content">
          <h2>About me</h2>
          <p>
            Hello! My name is Tolga Uslu, a passionate junior full stack
            developer dedicated to build modern, fast and responsive web
            applications using front-end and back-end technologies. I am always
            eager to learn new tools and techniques to expand my skill set and
            tackle exciting challenges in web development.
          </p>
          <p>
            I completed my full stack development course at Winc Academy. I have
            gained experience with HTML, CSS, Javascript, React, NodeJS/Express,
            SQL and Prisma. I work with tools as VSCODE, Git, Github and
            Postman. Now, I want to use my experience in the workfield as a
            junior developer.
          </p>

          <div className="skills-list">
            <div className="skill">
              <FaHtml5 size={50} />
              <p>HTML5</p>
            </div>
            <div className="skill">
              <FaCss3Alt size={50} />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <FaJs size={50} />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <FaReact size={50} />
              <p>React</p>
            </div>
            <div className="skill">
              <SiNodedotjs size={50} />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <SiExpress size={50} />
              <p>Express</p>
            </div>
            <div className="skill">
              <SiSqlite size={50} />
              <p>SQL</p>
            </div>
            <div className="skill">
              <SiPrisma size={50} />
              <p>Prisma</p>
            </div>
            <div className="skill">
              <FaGitAlt size={50} />
              <p>Git</p>
            </div>
            <div className="skill">
              <FaGithub size={50} />
              <p>GitHub</p>
            </div>
            <div className="skill">
              <SiPostman size={50} />
              <p>Postman</p>
            </div>
            <div className="skill">
              <img
                src={vscodeImg}
                alt="VS Code"
                style={{ width: 50, height: 50 }}
              />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

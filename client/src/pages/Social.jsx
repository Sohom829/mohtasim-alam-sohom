import { LogoDiscord, LogoInstagram, LogoGithub } from "react-ionicons";
import BubblesComponent from "../components/Bubbles";
import NavbarComponent from "../components/Navbar";
import "./Social.css";

function SocialPage() {
  return (
    <div className="social">
      <div className="background">
        <BubblesComponent />
      </div>
      <div className="top">
        <NavbarComponent />
      </div>
      <div className="main-text">
        <h1>My socials</h1>
      </div>
      <div className="buttons">
        <a
          className="discord"
          href="https://discord.com/users/967657941937291265"
          target={"_blank"}
          rel="noreferrer"
        >
          <LogoDiscord width={"25px"} height={"25px"} />
        </a>
        <a
          className="instagram"
          href="https://www.instagram.com/undefined_username.null/"
          target={"_blank"}
          rel="noreferrer"
        >
          <LogoInstagram width={"25px"} height={"25px"} />
        </a>
        <a
          className="github"
          href="https://github.com/Sohom829"
          target={"_blank"}
          rel="noreferrer"
        >
          <LogoGithub width={"25px"} height={"25px"} />
        </a>
      </div>
    </div>
  );
}

export default SocialPage;

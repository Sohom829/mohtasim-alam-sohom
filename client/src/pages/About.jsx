import BubblesComponent from "../components/Bubbles";
import NavbarComponent from "../components/Navbar";
import "./About.css";
function AboutPage() {
  return (
    <div className="about">
      <div className="background">
        <BubblesComponent />
      </div>
      <div className="top">
        <NavbarComponent />
      </div>
      <div className="contents">
        <div>
          <header>
            <h1 className="xS7jXsSAls">About me</h1>
          </header>
          <div className="7XjaA9s">
            <p className="CsZiS81Sa">
              I'm Mohtasim Alam Sohom. I'm a student also a full-stack website
              developer. I'm from Bangladesh.
            </p>
            <p className="jsXy2AFTpSIlx">
              I'm still in high school and I love playing games, coding,
              listening to Music. I also love to produce music even though I'm
              not an artist or something
            </p>
          </div>
          <div className="xSauS91S">
            <a
              className="xWUhxAiu"
              href="https://github.com/Sohom829/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <button className="_aCsxW81">Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

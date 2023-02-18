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
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}

export default SocialPage;

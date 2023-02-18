import "./Navbar.css";

function NavbarComponent() {
  return (
    <div className="navbar">
      <div className="navbar-contents">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/social">Social</a>
      </div>
    </div>
  );
}

export default NavbarComponent;

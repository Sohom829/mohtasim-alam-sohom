import "./App.css";
import BubblesComponent from "./components/Bubbles";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="background">
        <BubblesComponent />
      </div>
      <div className="top">
        <NavbarComponent />
      </div>
      <div className="texts">
        <header className="main-header">
          <h1 className="ZxSajUshA8">Hello, I'm</h1>
          <h1 className="nExS91Da">Mohtasim Alam Sohom</h1>
        </header>
      </div>
    </div>
  );
}

export default App;

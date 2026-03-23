import avatar from '../assets/avatar.webp';

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

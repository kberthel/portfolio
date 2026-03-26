import avatar from '../assets/images/avatar.webp';

export default function Hero() {
  return (
    <section className="hero container">
      <img src={avatar} alt="Karhan" className="avatar" />

      <h1>Karhan</h1>

      <p className="tagline">UX/UI Designer & Front-End Developer</p>

      <p className="intro">
        With a background in international aviation, I bring a strong
        understanding of user needs into designing clear, thoughtful digital
        experiences.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn primary">
          View Projects
        </a>
        <a href="#contact" className="btn secondary">
          Contact
        </a>
      </div>
    </section>
  );
}

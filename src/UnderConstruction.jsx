export default function UnderConstruction() {
  return (
    <main className="under-construction">
      <div className="ripple-wrap" aria-hidden="true">
        <span className="ripple ripple-1"></span>
        <span className="ripple ripple-2"></span>
        <span className="ripple ripple-3"></span>
      </div>

      <section className="construction-card">
        <p className="eyebrow">Portfolio</p>
        <h1>Under Construction</h1>
        <p className="construction-text">
          A calm little space in progress. Please check back soon.
        </p>
      </section>
    </main>
  );
}

function Home() {
  return (
    <div>

      {/* Section 1: Hero */}
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>Explore our website and learn more about us.</p>
        <button>Get Started</button>
      </section>

      {/* Section 2: Introduction */}
      <section className="section">
        <h2>Introduction</h2>
        <p>
          Welcome to our website. We provide simple
          and useful information for everyone.
        </p>
      </section>

      {/* Section 3: Features */}
      <section className="section light">
        <h2>Our Features</h2>
        <div className="cards">
          <div className="card">Easy to Use</div>
          <div className="card">Modern Design</div>
          <div className="card">Responsive Layout</div>
        </div>
      </section>

      {/* Section 4: Get Started */}
      <section className="section">
        <h2>Start Exploring</h2>
        <p>Discover more about our website.</p>
      </section>

    </div>
  );
}

export default Home;

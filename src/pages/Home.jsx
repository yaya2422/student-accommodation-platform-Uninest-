function Home() {
  return (
    <div>
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to UniNest</h1>

        <p style={styles.subtitle}>
          Find safe, affordable and verified student accommodation
          near your campus.
        </p>

        <a href="/listings">
          <button style={styles.button}>
            Browse Listings
          </button>
        </a>
      </section>

      <section style={styles.features}>
        <div style={styles.card}>
          <h2>Verified Listings</h2>
          <p>
            Browse trusted student hostels and apartments.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Affordable Prices</h2>
          <p>
            Find accommodation that fits your student budget.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Near Campus</h2>
          <p>
            Discover housing close to major universities in Nairobi.
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "#f5f7fb",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    color: "#1e3a8a",
  },

  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },

  button: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    padding: "50px 20px",
  },

  card: {
    width: "280px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Home;
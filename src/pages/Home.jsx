import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Find Your Perfect Student Accommodation
        </h1>

        <p style={styles.subtitle}>
          Safe, affordable and verified housing near your campus.
        </p>

        <Link to="/listings">
          <button style={styles.button}>
            Browse Listings
          </button>
        </Link>
      </section>

      <section style={styles.features}>
        <div style={styles.card}>
          <h2>🏠 Verified Listings</h2>
          <p>
            Browse trusted accommodation options verified for students.
          </p>
        </div>

        <div style={styles.card}>
          <h2>💰 Affordable Prices</h2>
          <p>
            Find rooms and hostels that fit your student budget.
          </p>
        </div>

        <div style={styles.card}>
          <h2>📍 Prime Locations</h2>
          <p>
            Stay close to your campus and save on transport costs.
          </p>
        </div>
      </section>

      <section style={styles.stats}>
        <div style={styles.statCard}>
          <h2>500+</h2>
          <p>Students Helped</p>
        </div>

        <div style={styles.statCard}>
          <h2>100+</h2>
          <p>Listings Available</p>
        </div>

        <div style={styles.statCard}>
          <h2>20+</h2>
          <p>Partner Landlords</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "100px 20px",
    backgroundColor: "#f5f7fb",
  },

  title: {
    fontSize: "3rem",
    color: "#1e3a8a",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },

  button: {
    padding: "12px 25px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
    padding: "60px 20px",
  },

  card: {
    width: "300px",
    padding: "25px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
    padding: "50px 20px",
    backgroundColor: "#eef2ff",
  },

  statCard: {
    width: "220px",
    padding: "20px",
    textAlign: "center",
  },
};

export default Home;
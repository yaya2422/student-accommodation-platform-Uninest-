function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1>Find Safe Student Accommodation in Nairobi</h1>
        <p>
          UniNest helps students find verified, affordable and secure housing near their campus.
        </p>

        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Search by location, campus or budget..."
            style={styles.input}
          />
          <button style={styles.button}>Search</button>
        </div>
      </div>

      <div style={styles.features}>
        <div style={styles.card}>
          <h3>✔ Verified Listings</h3>
          <p>No scams. All properties are checked.</p>
        </div>

        <div style={styles.card}>
          <h3>💰 Affordable Prices</h3>
          <p>Rooms for every student budget.</p>
        </div>

        <div style={styles.card}>
          <h3>📍 Near Campus</h3>
          <p>Find housing close to your university.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
  },

  hero: {
    backgroundColor: "#1e3a8a",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
  },

  searchBox: {
    marginTop: "20px",
  },

  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "5px",
    border: "none",
    marginRight: "10px",
  },

  button: {
    padding: "10px 20px",
    backgroundColor: "#facc15",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "40px",
    flexWrap: "wrap",
  },

  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Home;
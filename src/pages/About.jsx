function About() {
  return (
    <div style={styles.container}>
      <h1>About UniNest</h1>

      <p style={styles.text}>
        UniNest is a student accommodation platform designed to help
        university students find safe, affordable, and verified housing
        near their campuses.
      </p>

      <p style={styles.text}>
        Our goal is to simplify the housing search process by providing
        students with a centralized platform where they can browse listings,
        compare options, and connect with landlords.
      </p>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>🎯 Mission</h2>
          <p>
            To help students access quality accommodation quickly and
            conveniently.
          </p>
        </div>

        <div style={styles.card}>
          <h2>👁 Vision</h2>
          <p>
            To become the leading student accommodation platform in Kenya.
          </p>
        </div>

        <div style={styles.card}>
          <h2>🤝 Values</h2>
          <p>
            Trust, affordability, transparency, and convenience.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  text: {
    lineHeight: "1.8",
    marginBottom: "20px",
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  card: {
    flex: "1",
    minWidth: "250px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
};

export default About;
function Footer() {
  return (
    <footer style={styles.footer}>
      <h3>UniNest</h3>

      <p>
        Helping students find safe and affordable accommodation.
      </p>

      <p style={{ marginTop: "10px" }}>
        © 2026 UniNest. All Rights Reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1e3a8a",
    color: "white",
    textAlign: "center",
    padding: "30px",
    marginTop: "60px",
  },
};

export default Footer;
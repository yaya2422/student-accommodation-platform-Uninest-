function Footer() {
  return (
    <footer style={styles.footer}>
      <h3>UniNest</h3>

      <p>
        Helping students find safe and affordable accommodation
        near their campuses.
      </p>

      <p>
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
    padding: "25px",
    marginTop: "50px",
  },
};

export default Footer;
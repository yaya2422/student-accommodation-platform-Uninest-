import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>UniNest</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/listings" style={styles.link}>Listings</Link>
        <Link to="/add-listing" style={styles.link}>Add Listing</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#1e3a8a",
    color: "white",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    display: "flex",
    gap: "15px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
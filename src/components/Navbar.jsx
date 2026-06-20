import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>UniNest</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>

        <Link to="/listings" style={styles.link}>
          Listings
        </Link>

        <Link to="/about" style={styles.link}>
          About
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#1e3a8a",
    color: "white",
  },

  logo: {
    margin: 0,
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
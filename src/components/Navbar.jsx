import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1e3a8a",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>UniNest</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/listings"
          style={{ color: "white", textDecoration: "none" }}
        >
          Listings
        </Link>

        <Link
          to="/about"
          style={{ color: "white", textDecoration: "none" }}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
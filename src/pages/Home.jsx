import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          backgroundColor: "#f5f7fb"
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>
          Find Your Perfect Student Accommodation
        </h1>

        <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
          Safe, Verified and Affordable Housing Near Your Campus
        </p>

        <Link to="/listings">
          <button
            style={{
              marginTop: "30px",
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#1e3a8a",
              color: "white",
              cursor: "pointer"
            }}
          >
            Browse Listings
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ textAlign: "center" }}>
          Why Students Choose UniNest
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "40px",
            flexWrap: "wrap"
          }}
        >
          <div style={cardStyle}>
            <h3>✅ Verified Listings</h3>
            <p>No fake landlords or scam listings.</p>
          </div>

          <div style={cardStyle}>
            <h3>📶 Wi-Fi & Utilities</h3>
            <p>Find accommodation with reliable internet and water.</p>
          </div>

          <div style={cardStyle}>
            <h3>🎓 Near Campus</h3>
            <p>Housing close to universities and colleges.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const cardStyle = {
  width: "250px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

export default Home;
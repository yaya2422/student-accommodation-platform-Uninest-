import { useState } from "react";
import { Link } from "react-router-dom";
import rooms from "../data/rooms";

function Listings() {
  const [search, setSearch] = useState("");
  const [wifiFilter, setWifiFilter] = useState(false);

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.name.toLowerCase().includes(search.toLowerCase()) ||
      room.location.toLowerCase().includes(search.toLowerCase());

    const matchesWifi = wifiFilter ? room.wifi === true : true;

    return matchesSearch && matchesWifi;
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Available Listings</h1>

      {/* Filters */}
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <label style={styles.checkbox}>
          <input
            type="checkbox"
            checked={wifiFilter}
            onChange={() => setWifiFilter(!wifiFilter)}
          />
          WiFi Only
        </label>
      </div>

      {/* Cards */}
      <div style={styles.grid}>
        {filteredRooms.map((room) => (
          <div key={room.id} style={styles.card}>
            <img src={room.image} alt={room.name} style={styles.image} />

            <h3 style={styles.name}>{room.name}</h3>

            <p style={styles.price}>{room.price}</p>

            <p style={styles.location}>📍 {room.location}</p>

            <p style={styles.wifi}>
              WiFi: {room.wifi ? "Available" : "Not Available"}
            </p>

            <Link to={`/listing/${room.id}`}>
              <button style={styles.button}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1e3a8a",
  },

  filters: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  checkbox: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
  },

  card: {
    width: "260px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    padding: "15px",
  },

  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  name: {
    marginTop: "10px",
  },

  price: {
    color: "#1e3a8a",
    fontWeight: "bold",
  },

  location: {
    fontSize: "14px",
  },

  wifi: {
    fontSize: "14px",
    marginBottom: "10px",
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Listings;
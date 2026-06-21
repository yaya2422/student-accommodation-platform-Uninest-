import { useState } from "react";
import { Link } from "react-router-dom";

function Listings() {
  const [search, setSearch] = useState("");
  const [wifiFilter, setWifiFilter] = useState(false);

  const rooms = [
    {
      name: "Sunrise Hostel",
      price: "Ksh 8,000/month",
      location: "Kileleshwa",
      wifi: true,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    {
      name: "Campus View Bedsitter",
      price: "Ksh 12,000/month",
      location: "Kilimani",
      wifi: true,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    {
      name: "Green Haven Rooms",
      price: "Ksh 6,500/month",
      location: "Ngara",
      wifi: false,
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    },
    {
      name: "Royal Student Homes",
      price: "Ksh 10,000/month",
      location: "Westlands",
      wifi: true,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    },
  ];

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.name.toLowerCase().includes(search.toLowerCase()) ||
      room.location.toLowerCase().includes(search.toLowerCase());

    const matchesWifi = wifiFilter ? room.wifi === true : true;

    return matchesSearch && matchesWifi;
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Available Student Listings</h1>

      {/* SEARCH */}
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
          Only WiFi available
        </label>
      </div>

      {/* CARDS */}
      <div style={styles.grid}>
        {filteredRooms.map((room, index) => (
          <div key={index} style={styles.card}>
            
            <img
              src={room.image}
              alt={room.name}
              style={styles.image}
            />

            <h3>{room.name}</h3>
            <p><b>Price:</b> {room.price}</p>
            <p><b>Location:</b> {room.location}</p>
            <p><b>WiFi:</b> {room.wifi ? "Available" : "Not Available"}</p>

            <Link to={`/listing/${index}`} style={styles.link}>
              <button style={styles.button}>View Details</button>
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
    fontFamily: "Arial",
  },

  title: {
    marginBottom: "20px",
  },

  filters: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  checkbox: {
    fontSize: "14px",
  },

  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  link: {
    textDecoration: "none",
  },
};

export default Listings;
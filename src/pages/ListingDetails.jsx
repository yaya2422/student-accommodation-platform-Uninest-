import { useParams } from "react-router-dom";

function ListingDetails() {
  const { id } = useParams();

  // Fake data (same as Listings page)
  const rooms = [
    {
      name: "Sunrise Hostel",
      price: "Ksh 8,000/month",
      location: "Kileleshwa",
      wifi: true,
      description: "Safe and quiet hostel near campus with 24/7 security.",
    },
    {
      name: "Campus View Bedsitter",
      price: "Ksh 12,000/month",
      location: "Kilimani",
      wifi: true,
      description: "Modern bedsitter with fast WiFi and water supply.",
    },
    {
      name: "Green Haven Rooms",
      price: "Ksh 6,500/month",
      location: "Ngara",
      wifi: false,
      description: "Affordable rooms for students on a tight budget.",
    },
    {
      name: "Royal Student Homes",
      price: "Ksh 10,000/month",
      location: "Westlands",
      wifi: true,
      description: "Premium student housing with study areas.",
    },
  ];

  const room = rooms[id];

  if (!room) {
    return <h2 style={{ padding: "20px" }}>Room not found</h2>;
  }

  return (
    <div style={styles.container}>
      <h1>{room.name}</h1>
      <p><b>Price:</b> {room.price}</p>
      <p><b>Location:</b> {room.location}</p>
      <p><b>WiFi:</b> {room.wifi ? "Available" : "Not Available"}</p>
      <p style={{ marginTop: "10px" }}>{room.description}</p>

      <button style={styles.button}>Contact Landlord</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
  },
  button: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default ListingDetails;
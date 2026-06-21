import { useParams } from "react-router-dom";
import rooms from "../data/rooms";

function ListingDetails() {
  const { id } = useParams();

  const room = rooms.find((room) => room.id === Number(id));

  if (!room) {
    return <h2>Listing Not Found</h2>;
  }

  return (
    <div style={styles.container}>
      <img src={room.image} alt={room.name} style={styles.image} />

      <h1>{room.name}</h1>

      <p><strong>Price:</strong> {room.price}</p>
      <p><strong>Location:</strong> {room.location}</p>
      <p><strong>WiFi:</strong> {room.wifi ? "Available" : "Not Available"}</p>

      <p style={styles.description}>
        {room.description}
      </p>

      <button style={styles.button}>
        Contact Landlord
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
  },

  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  description: {
    marginTop: "15px",
    lineHeight: "1.6",
  },

  button: {
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ListingDetails;
export default function Listings() {
  const rooms = [
    {
      name: "Sunrise Hostel",
      price: "Ksh 8,000/month",
      location: "Kileleshwa",
      wifi: true
    },
    {
      name: "Campus View Bedsitter",
      price: "Ksh 12,000/month",
      location: "Kilimani",
      wifi: true
    },
    {
      name: "Green Haven Rooms",
      price: "Ksh 6,500/month",
      location: "Ngara",
      wifi: false
    }
  ];

  return (
    <div style={{ padding: "30px", backgroundColor: "#f5f7fb", minHeight: "100vh" }}>
      <h1>Available Listings</h1>

      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
        {rooms.map((room, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "220px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              cursor: "pointer"
            }}
          >
            <h3>{room.name}</h3>
            <p>{room.price}</p>
            <p>{room.location}</p>
            <p>WiFi: {room.wifi ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";

function AddListing() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    location: "",
    description: "",
    wifi: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Listing submitted successfully!");

    setFormData({
      name: "",
      price: "",
      location: "",
      description: "",
      wifi: false,
    });
  };

  return (
    <div style={styles.container}>
      <h1>Add New Listing</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Property Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
          required
        />

        <label>
          <input
            type="checkbox"
            name="wifi"
            checked={formData.wifi}
            onChange={handleChange}
          />
          WiFi Available
        </label>

        <button type="submit" style={styles.button}>
          Submit Listing
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  textarea: {
    padding: "12px",
    minHeight: "120px",
    borderRadius: "5px",
  },

  button: {
    padding: "12px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddListing;
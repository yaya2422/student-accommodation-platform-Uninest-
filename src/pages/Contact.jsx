function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>

      <p>Email: support@uninest.com</p>
      <p>Phone: +254 700 123 456</p>
      <p>Location: Nairobi, Kenya</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
};

export default Contact;
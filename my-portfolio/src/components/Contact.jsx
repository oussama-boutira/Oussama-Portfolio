import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    // Sign up at https://www.emailjs.com/ to get these.
    emailjs
      .sendForm(
        "service_niqplpm",
        "template_i09ztnp",
        form.current,
        "fbMBRAavFEQEFGA6A"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div
      className="contact-container"
      style={{ padding: "5rem 10%", textAlign: "center" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "3rem", marginBottom: "2rem" }}
      >
        Get In <span style={{ color: "#FF8C42" }}>Touch</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: "1.2rem",
          color: "rgba(255,255,255,0.8)",
          marginBottom: "3rem",
          maxWidth: "600px",
          margin: "0 auto 3rem",
        }}
      >
        I'm currently open to new opportunities and collaborations. Whether you
        have a question or just want to say hi, feel free to drop a message!
      </motion.p>

      <motion.div
        className="contact-form glass-panel"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "3rem",
          borderRadius: "16px",
        }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={{
              padding: "1rem",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={{
              padding: "1rem",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            style={{
              padding: "1rem",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
              resize: "vertical",
            }}
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "1rem",
              background: loading ? "#ccc" : "#FF8C42",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "transform 0.2s",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <div
        className="social-links"
        style={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* Add social icons here */}
        <a
          href="https://www.linkedin.com/in/oussama-boutira-04333739a/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "2rem", transition: "color 0.3s" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#0077b5")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/oussama-boutira"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "2rem", transition: "color 0.3s" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#333")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/212616150329"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "2rem", transition: "color 0.3s" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#25D366")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Contact;

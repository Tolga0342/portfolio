import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // Iconen voor succes/fout
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Verwijder de notificatie na 5 seconden
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(null);
      }, 5000); // 5 seconden

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hoivsdm", // <-- Vul hier je Service ID in
        "template_kvkqbx8", // <-- Vul hier je Template ID in
        form.current,
        "B8Qs6GYL5quDILDvg" // <-- Vul hier je Public Key in
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setError(null);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setError("Something went wrong while communicating with the server.");
          setSuccess(false);
        }
      );
  };

  return (
    <section className="contact-section fade-in-up">
      <p className="section-title">Get in touch</p>
      <p className="contact-intro">
        I'd like to hear from you! If you have any questions or feedback, use
        the form below.
      </p>

      <form className="contact-form" ref={form} onSubmit={handleSubmit}>
        <div className="input-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="E-mailadres" required />
        </div>
        <textarea
          name="message"
          placeholder="Your message"
          rows="10"
          required
        />
        <button type="submit">Submit now</button>
      </form>

      {/* Success of error bericht */}
      {success && (
        <div className="status-message success-message">
          <FaCheckCircle />
          <span>Message sent successfully!</span>
        </div>
      )}
      {error && (
        <div className="status-message error-message">
          <FaExclamationCircle />
          <span>{error}</span>
        </div>
      )}
    </section>
  );
};

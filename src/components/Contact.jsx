import React, { useState, useRef } from "react";
import emailjs from "emailjs-com"; // using emailjs-com
import { FiLoader, FiCheck } from "react-icons/fi";
import Confetti from "react-confetti"; // install with: npm install react-confetti

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState(null); // null | success | error
  const [showConfetti, setShowConfetti] = useState(false);
  const buttonRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    emailjs
      .send(
        "service_vbn1r5e", // replace with your EmailJS service ID
        "template_gbb5abe", // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Wo3JlrZJ5cdiHS-ml" // replace with your EmailJS user/public key
      )
      .then(
        () => {
          setStatus("sent");
          setFormData({ name: "", email: "", message: "" });
          setModal("success");

          // Trigger confetti burst from button
          setShowConfetti(true);
          setTimeout(() => {
            setStatus("idle");
            setShowConfetti(false);
          }, 3000);
        },
        () => {
          setStatus("error");
          setModal("error");
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  // Get button position for confetti origin
  const getButtonPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + window.scrollY + rect.height / 2,
      };
    }
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  };

  const { x, y } = getButtonPosition();

  return (
    <section id="contact" className="relative z-20 bg-[var(--card-bg-color)] w-full py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold mb-6 
                     bg-gradient-to-r from-[var(--accent)] via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          Contact Us
        </h2>
        <p className="text-md text-[var(--secondary-text-color)] mb-8">
          Have more questions or feedback? We’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            ref={buttonRef}
            type="submit"
            disabled={status === "sending"}
            className={`cursor-pointer w-full py-3 rounded-md font-semibold transition shadow-lg flex items-center justify-center gap-2
              ${status === "sent" 
                ? "bg-green-600 text-white animate-pulse ring-2 ring-green-400" 
                : "bg-[var(--accent)] text-[var(--main-bg-color)] hover:bg-[var(--accent)]/80"}`}
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && (
              <>
                <FiLoader className="animate-spin" /> Sending...
              </>
            )}
            {status === "sent" && (
              <>
                <FiCheck className="text-white" /> Message Sent
              </>
            )}
            {status === "error" && "Error, try again"}
          </button>
        </form>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[var(--main-bg-color)] rounded-lg shadow-lg p-6 max-w-sm text-center">
            {modal === "success" ? (
              <>
                <h3 className="text-xl font-semibold text-green-500 mb-2">Thank you!</h3>
                <p className="text-sm text-[var(--secondary-text-color)]">
                  Thank you for reaching out. We’ll get back to you shortly. Kindly check your mail for updates.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-red-500 mb-2">Oops!</h3>
                <p className="text-sm text-[var(--secondary-text-color)]">
                  Something went wrong while sending your message. Please try again in a moment.
                </p>
              </>
            )}
            <button
              onClick={() => setModal(null)}
              className="mt-4 px-4 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confetti burst from button */}
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
          initialVelocityX={{ min: -10, max: 10 }}
          initialVelocityY={{ min: -15, max: -5 }}
          confettiSource={{ x: x, y: y, w: 10, h: 10 }}
        />
      )}
    </section>
  );
};

export default Contact;

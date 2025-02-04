// ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://portfolio-backend-5bcr.onrender.com/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, subject, message }),
        }
      );

      if (response.ok) {
        setStatus("Email sent successfully!");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred while sending the email.");
    }
  };

  return (
    <div className="max-w-full mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium" htmlFor="email">
            Your Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium" htmlFor="subject">
            Subject:
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Subject"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Your message..."
            rows="6"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#212121] text-white font-semibold rounded hover:bg-[#111111] transition-colors cursor-pointer"
        >
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-center text-lg">{status}</p>}
    </div>
  );
};

export default ContactForm;

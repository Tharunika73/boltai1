// src/pages/ContactPage.tsx
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">Contact Us</h1>
      <p className="mt-4 text-gray-700">
        If you have any questions, feel free to reach out!
      </p>
      <form className="mt-6 space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-2"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded-lg p-2"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

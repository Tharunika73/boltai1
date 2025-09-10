// src/pages/ContactPage.tsx
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Company Information */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Company Info</h2>
          <p className="text-gray-700 mb-4">
            <strong>Address:</strong><br />
            123 Innovation Drive,<br />
            Tech City, TX 75001
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong><br />
            (123) 456-7890
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong><br />
            contact@yourcompany.com
          </p>
          <p className="text-gray-600">
            We are committed to providing the best service. Contact us with any queries or feedback!
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;

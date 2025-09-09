import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* Social Media */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <Youtube size={20} />
          </a>
        </div>

        {/* 👇 Centered Copyright */}
        <div className="w-full text-center text-sm text-gray-400">
          © {new Date().getFullYear()} StyleChat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

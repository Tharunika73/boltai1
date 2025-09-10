// src/components/Layout/Header.tsx
import React from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
  clearSearch: () => void;
  setActivePage: (page: "home" | "contact" | "profile" | "login") => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, clearSearch, setActivePage }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo on the left */}
        <div>
          <h1
            className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
            onClick={() => setActivePage("home")}
          >
            StyleChat
          </h1>
        </div>

        {/* Navigation Links on the right */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setActivePage("home")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => setActivePage("contact")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => setActivePage("profile")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Profile
          </button>
          <button
            onClick={() => alert("Cart Page - implement with modal")}
            className="relative text-gray-700 hover:text-blue-600 transition-colors"
          >
            🛒
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          {/* Login Button */}
          <button
            onClick={() => setActivePage("login")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

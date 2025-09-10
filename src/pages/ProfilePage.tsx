// src/pages/ProfilePage.tsx
import React, { useState } from "react";
import { LogOut, Settings, Gift, UserCircle, Heart, Package, Edit, MessageSquare, X } from "lucide-react";
import { Button } from "../components/UI/Button";

const ProfilePage: React.FC = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleLogout = () => {
    alert("Logged out!");
  };

  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  const handleFeedback = () => {
    setShowFeedback(true);
  };

  const submitEditProfile = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated!");
    setShowEditProfile(false);
  };

  const submitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Feedback sent!");
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-8 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <UserCircle className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">John Doe</h1>
          <p className="text-gray-500 mb-4">johndoe@example.com</p>
        </div>

        {/* Orders & Wishlist */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 cursor-pointer">
            <Package className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-gray-700 font-medium">Orders</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 cursor-pointer">
            <Heart className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-gray-700 font-medium">Wishlist</span>
          </div>
        </div>

        {/* Account Settings */}
        <div className="border-t pt-4 space-y-3">
          <div onClick={handleEditProfile} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
            <Edit className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">Edit Profile</span>
          </div>
          <div onClick={handleFeedback} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">Feedback</span>
          </div>
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
            <Settings className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">Settings</span>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <Button variant="outline" className="w-full flex items-center justify-center space-x-2" onClick={handleLogout}>
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative">
            <button onClick={() => setShowEditProfile(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Edit Profile</h2>
            <form onSubmit={submitEditProfile} className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit" className="w-full">
                Save
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative">
            <button onClick={() => setShowFeedback(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Feedback</h2>
            <form onSubmit={submitFeedback} className="space-y-4">
              <textarea
                placeholder="Write your feedback..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
              <Button type="submit" className="w-full">
                Send
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

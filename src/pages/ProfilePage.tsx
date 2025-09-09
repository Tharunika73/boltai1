// src/pages/ProfilePage.tsx
import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">My Profile</h1>
      <div className="mt-4 space-y-2">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Member Since:</strong> Jan 2024</p>
      </div>
    </div>
  );
};

export default ProfilePage;

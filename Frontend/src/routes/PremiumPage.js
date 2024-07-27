import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-700 p-4 rounded-lg mb-4">
    <h2 className="text-lg font-semibold mb-2 text-green-500">{title}</h2>
    <p className="text-gray-300">{description}</p>
  </div>
);

const PremiumPage = () => {
  return (
    <div className="bg-gray-800 text-white p-8 text-center min-h-screen">
      <div className="mx-auto max-w-md">
        <h1 className="text-green-500 text-4xl font-bold mb-4">Upgrade to Premium</h1>
        <p className="mb-8">Unlock exclusive features with our Premium subscription!</p>

        <FeatureCard
          title="Ad-free listening"
          description="Enjoy uninterrupted music without any ads to enhance your listening experience."
        />

        <FeatureCard
          title="Offline downloads"
          description="Download your favorite songs and playlists to listen offline, anytime, anywhere."
        />

        <FeatureCard
          title="High-quality audio"
          description="Experience crystal-clear, high-fidelity audio for an immersive sound journey."
        />

        <Link to="/home">
          <button
            className="bg-green-500 text-white px-6 py-3 font-semibold rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
          >
            Upgrade Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PremiumPage;

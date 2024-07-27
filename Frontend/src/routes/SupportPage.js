// SupportPage.js

import React from 'react';

const SupportPage = () => {
  return (
    <div className="bg-gray-800 text-white p-8 min-h-screen">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-green-500 text-4xl font-bold mb-8 text-center">Support</h1>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-green-500">About Us</h2>
          <p className="text-gray-300">
            Welcome to our Support Center! If you have any questions or need assistance, feel free to reach out.
          </p>
          <p className="text-gray-300">
            We are dedicated to providing a seamless music streaming experience to music enthusiasts around the world.
            Our journey began with a passion for music and a vision to create a platform that brings joy and inspiration
            through the power of music.
          </p>
          <p className="text-gray-300">
            At our core, we believe in the transformative power of music. Whether it's discovering new artists,
            curating personalized playlists, or enjoying your favorite tunes, we are here to enhance your musical journey.
          </p>
          <p className="text-gray-300">
            Our team consists of music lovers, developers, and creators who collaborate to deliver innovative features
            and a vast library of songs. We strive to create an inclusive community where everyone can express their
            unique taste in music.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2 text-green-500">FAQs</h2>
          <p className="text-gray-300">
            Q: How can I create a playlist?
            <br />
            A: You can create a playlist by navigating to the "Create Playlist" section in your profile.
          </p>
          <p className="text-gray-300">
            Q: How do I Upgrade to Premium?
            <br />
            A: You can view all information regarding Premium subscription from our Premium Tab. Happy Listening!
          </p>
        </div>

        <div className="mt-8 mb-8">
          <h2 className="text-lg font-semibold mb-2 text-green-500">Contact Information</h2>
          <p className="text-gray-300">
            Email: OfficialSupport@gmail.com
          </p>
          <p className="text-gray-300">
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;

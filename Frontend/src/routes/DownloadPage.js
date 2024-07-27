// DownloadPage.js

import React from 'react';

const DownloadPage = () => {
  return (
    <div className="bg-gray-800 text-white p-8 min-h-screen">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-green-500 text-4xl font-bold mb-8 text-center">Downloads</h1>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-green-500">Offline Downloads</h2>
          <p className="text-gray-300">
            Enjoy your favorite music even when you're offline! With our offline downloads feature, you can take
            your playlists and songs with you wherever you go, without worrying about an internet connection.
          </p>
          <p className="text-gray-300">
            Simply find the music you love, tap the download button, and it will be available for offline listening
            in your Downloads section.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-green-500">How to Download</h2>
          <p className="text-gray-300">
            1. Find the song or playlist you want to download.
          </p>
          <p className="text-gray-300">
            2. Look for the download icon (usually a downward arrow) next to the song or playlist.
          </p>
          <p className="text-gray-300">
            3. Tap the download icon to start the download process.
          </p>
          <p className="text-gray-300">
            4. Once downloaded, access your Downloads section to enjoy offline listening.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-green-500">Benefits of Offline Downloads</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Uninterrupted music without relying on an internet connection.</li>
            <li>Save data usage by downloading over Wi-Fi.</li>
            <li>Perfect for traveling, commuting, or areas with poor connectivity.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;

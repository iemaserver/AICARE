import React from 'react';
import { Helmet } from 'react-helmet-async';

const PlaceholderPage = ({ title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title} - AICARE 2025</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
          <p className="text-sm text-gray-500 mt-4">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default PlaceholderPage;

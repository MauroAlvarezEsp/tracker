import React from 'react';

const ErrorComponent = ({ message }: { message?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white p-4 border border-gray-700 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="currentColor"
        className="w-16 h-16 mb-4 text-red-500"
      >
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" fill="none" />
        <line x1="20" y1="20" x2="44" y2="44" stroke="currentColor" strokeWidth="4" />
        <line x1="20" y1="44" x2="44" y2="20" stroke="currentColor" strokeWidth="4" />
      </svg>
      <h1 className="text-xl font-bold mb-2">An error ocurred please try later</h1>
      {message && <p className="text-gray-400">{message}</p>}
    </div>
  );
};

export default ErrorComponent;

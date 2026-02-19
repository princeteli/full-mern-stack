import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, quantity, totalPrice } = location.state || {};

  if (!movie) {
    // Redirect to Home if data missing
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-900 p-4 text-gray-100">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Payment Confirmed ✅</h1>
        <p className="text-gray-300 mb-4">
          Your booking has been successfully completed!
        </p>

        <div className="bg-gray-700 p-4 rounded-lg mb-4 text-left text-gray-100">
          <p><span className="font-semibold">Movie:</span> {movie.movie_name}</p>
          <p><span className="font-semibold">Tickets:</span> {quantity}</p>
          <p><span className="font-semibold">Total Paid:</span> ₹{totalPrice}</p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmPayment;

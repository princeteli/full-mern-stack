import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, quantity } = location.state || {};

  const [upiId, setUpiId] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [seconds, setSeconds] = useState(10);
  const [loading, setLoading] = useState(false);

  if (!movie || !quantity) {
    navigate('/');
    return null;
  }

  useEffect(() => {
    if (!loading) return;

    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);

          // POST call once
          axios.post(`http://localhost:5000/book-ticket/${movie.id}`, { quantity })
            .then(res => {
              navigate('/confirm', { state: { movie, quantity, totalPrice: movie.price * quantity } });
            })
            .catch(err => {
              alert(err.response?.data || "Something went wrong");
              navigate('/');
            });

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [loading, movie.id, quantity, navigate]);

  const handleConfirm = () => {
    if (loading) return; // prevent double click
    setLoading(true);
    setSeconds(10); // reset countdown
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-900 p-4 text-gray-100">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full space-y-4">
        <h2 className="text-2xl font-bold text-center text-yellow-400">Payment Page</h2>

        <p>Movie: <b>{movie.movie_name}</b></p>
        <p>Quantity: <b>{quantity}</b></p>
        <p>Total Price: <b>₹{movie.price * quantity}</b></p>

        <input
          type="text"
          placeholder="UPI ID"
          value={upiId}
          onChange={e => setUpiId(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={e => setMobile(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          onClick={handleConfirm}
          disabled={loading} // prevent double click
          className={`w-full py-2 rounded font-semibold transition 
            ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500 text-white'}`}
        >
          {loading ? `Processing payment... ${seconds}s` : 'Confirm Payment'}
        </button>
      </div>
    </div>
  );
};

export default Payment;

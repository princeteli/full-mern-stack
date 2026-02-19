import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const { id } = useParams(); // Movie ID from route
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch movie by ID
  useEffect(() => {
    axios.get("http://localhost:5000/movies")
      .then(res => {
        const selected = res.data.find(m => m.id === parseInt(id));
        setMovie(selected);
        if (selected) setTotalPrice(selected.price);
      })
      .catch(err => console.log(err));
  }, [id]);

  // Update total price when quantity changes
  useEffect(() => {
    if (movie) setTotalPrice(movie.price * quantity);
  }, [quantity, movie]);

  if (!movie) return <div className="text-center text-gray-100 mt-10">Loading...</div>;

  const handleBooking = () => {
    navigate('/payment', { state: { movie, quantity, totalPrice } });
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-gray-100 p-6 flex justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-xl w-full flex flex-col items-center">
        
        <h2 className="text-2xl font-bold mb-4 text-yellow-400 text-center">
          Booking: {movie.movie_name}
        </h2>

        <img 
          src={movie.movie_image} 
          alt={movie.movie_name} 
          className="w-full h-64 object-cover rounded mb-4"
        />

        <p className="text-gray-300 mb-4 text-center">{movie.description}</p>

        <h3 className="text-lg font-semibold mb-2">Price per Ticket: ₹{movie.price}</h3>

        {/* Quantity Input */}
        <div className="mb-4 flex items-center space-x-3">
          <label htmlFor="tickets" className="text-gray-200 font-medium">Tickets:</label>
          <input
            id="tickets"
            type="number"
            min="1"
            max={movie.total_tickets}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            className="w-20 px-2 py-1 rounded text-white font-semibold text-center"
          />
        </div>

        <h3 className="text-lg font-semibold mb-4">Total Price: ₹{totalPrice}</h3>

        {/* Proceed Button */}
        <button
          onClick={handleBooking}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded transition-colors"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Booking;

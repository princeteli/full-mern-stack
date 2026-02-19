import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  // Card click handler
  const goToBooking = () => {
    navigate(`/booking/${movie.id}`);
  };

  return (
    <div
      onClick={goToBooking} // whole card clickable
      className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg shadow-md cursor-pointer overflow-hidden flex flex-col"
    >
      {/* Movie Image */}
      <img
        src={movie.movie_image}
        alt={movie.movie_name}
        className="w-full h-56 object-cover"
      />

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-100">{movie.movie_name}</h3>
        <p className="text-gray-300 text-sm flex-grow">{movie.description}</p>
        <div className="mt-4">
          <h4 className="text-lg font-bold text-yellow-400">₹ {movie.price}</h4>
          <p className="text-gray-400 text-sm">Total Tickets: {movie.total_tickets}</p>
        </div>

        {/* Book Now Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            goToBooking();
          }}
          className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

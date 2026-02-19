import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    axios.get("http://localhost:5000/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-gray-100">
      
      {/* Navbar */}
      <nav className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo / Title */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">MovieApp</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-yellow-400">Home</a>
              <a href="#" className="hover:text-yellow-400">About</a>
              <a href="#" className="hover:text-yellow-400">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-gray-700">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-600">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-600">About</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-600">Contact</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Movies</h2>

        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-xl mt-10">No Movies Found</h2>
        )}
      </div>
    </div>
  );
};

export default Home;

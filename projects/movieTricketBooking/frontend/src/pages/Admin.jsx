import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    movie_image: '',
    movie_name: '',
    description: '',
    price: '',
    total_tickets: ''
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch movies
  const fetchMovies = async () => {
    try {
      const res = await axios.get('http://localhost:5000/movies');
      setMovies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editId) {
        // Update movie
        await axios.put(`http://localhost:5000/update-movie/${editId}`, form);
        setEditId(null);
      } else {
        // Add new movie
        await axios.post('http://localhost:5000/add-movie', form);
      }

      setForm({
        movie_image: '',
        movie_name: '',
        description: '',
        price: '',
        total_tickets: ''
      });

      fetchMovies();
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleEdit = (movie) => {
    setEditId(movie.id);
    setForm({
      movie_image: movie.movie_image,
      movie_name: movie.movie_name,
      description: movie.description,
      price: movie.price,
      total_tickets: movie.total_tickets
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await axios.delete(`http://localhost:5000/delete-movie/${id}`);
        fetchMovies();
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 p-6 text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">Admin Dashboard</h1>

      {/* Movie Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto mb-6 space-y-3"
      >
        <h2 className="text-xl font-bold mb-2">{editId ? 'Update Movie' : 'Add Movie'}</h2>

        <input
          type="text"
          placeholder="Movie Image URL"
          value={form.movie_image}
          onChange={(e) => setForm({ ...form, movie_image: e.target.value })}
          className="w-full border border-gray-600 px-3 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <input
          type="text"
          placeholder="Movie Name"
          value={form.movie_name}
          onChange={(e) => setForm({ ...form, movie_name: e.target.value })}
          className="w-full border border-gray-600 px-3 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border border-gray-600 px-3 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <input
          type="number"
          placeholder="Price (INR)"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full border border-gray-600 px-3 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <input
          type="number"
          placeholder="Total Tickets"
          value={form.total_tickets}
          onChange={(e) => setForm({ ...form, total_tickets: e.target.value })}
          className="w-full border border-gray-600 px-3 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <button
          type="submit"
          className={`w-full py-2 rounded font-semibold transition
            ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500 text-ehite'}`}
        >
          {loading ? 'Processing...' : editId ? 'Update Movie' : 'Add Movie'}
        </button>
      </form>

      {/* Movies Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded shadow-md">
          <thead className="bg-gray-700 text-gray-200">
            <tr>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Tickets</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-100">
            {movies.map((movie) => (
              <tr key={movie.id} className="border-b border-gray-700">
                <td className="py-2 px-4">
                  <img src={movie.movie_image} alt={movie.movie_name} className="w-20 h-12 object-cover rounded" />
                </td>
                <td className="py-2 px-4">{movie.movie_name}</td>
                <td className="py-2 px-4">{movie.description}</td>
                <td className="py-2 px-4">₹{movie.price}</td>
                <td className="py-2 px-4">{movie.total_tickets}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(movie)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="bg-red-600 text-gray-100 px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;

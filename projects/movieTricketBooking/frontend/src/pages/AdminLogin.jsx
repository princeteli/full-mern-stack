import React, { useState } from 'react'
import Admin from './Admin'

const AdminLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin@123') {
      setIsOpen(true)
      setError("")
    } else {
      setError("Invalid username or password")
    }
  }

  if (isOpen) return <Admin />  // Agar login success → Admin page

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm text-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-600 bg-gray-700 px-3 py-2 rounded mb-3 placeholder-gray-300 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-600 bg-gray-700 px-3 py-2 rounded mb-3 placeholder-gray-300 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default AdminLogin

// src/services/authserver.js
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_API_URL}/api/users`;


export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(
      "Registration failed:",
      error.response?.data || error.message
    );
    const message =
      error.response?.data?.message || "Registration failed. Please try again.";
    throw new Error(message);
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    const message =
      error.response?.data?.message || "Login failed. Please try again.";
    throw new Error(message);
  }
};

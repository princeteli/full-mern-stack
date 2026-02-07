"use client";
import { useEffect, useState } from "react";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate delay for UX (2s)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        {/* Optional: Brand Text */}
        <span className="ml-4 text-xl font-bold text-blue-600">Loading...</span>
      </div>
    );
  }

  return children;
}

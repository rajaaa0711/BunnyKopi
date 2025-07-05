import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Sign in:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-dancing text-yellow-900 mb-2">Welcome Back</h2>
          <p className="text-yellow-700 font-poppins">Sign in to your Bunny Coffee account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-yellow-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-poppins"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-yellow-900 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-poppins"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-yellow-300 text-yellow-600 focus:ring-yellow-500" />
              <span className="ml-2 text-sm text-yellow-700 font-poppins">Remember me</span>
            </label>
            <Link to="#" className="text-sm text-yellow-600 hover:text-yellow-800 font-poppins">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFD966] text-[#4B2E19] font-bold py-3 px-4 rounded-lg hover:bg-[#fff8f0] transition-all duration-200 font-poppins"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-yellow-700 font-poppins">
            Don't have an account?{" "}
            <Link to="/signup" className="text-yellow-600 hover:text-yellow-800 font-semibold">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 
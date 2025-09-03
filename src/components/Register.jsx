import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

const Register = ({ setPage }) => {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = register(form.email, form.password);
    if (!success) setError("Email sudah digunakan!");
    else setPage("login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 bg-white/80 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 bg-white/80 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg hover:scale-105 transition transform"
          >
            Register
          </button>
        </form>
        <p className="text-sm mt-6 text-center text-gray-200">
          Sudah punya akun?{" "}
          <span
            className="text-blue-400 hover:underline cursor-pointer"
            onClick={() => setPage("login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

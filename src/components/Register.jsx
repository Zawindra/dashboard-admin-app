import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

const Register = ({ setPage }) => {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = register(form.username, form.password);
    if (!success) setError("Username sudah digunakan!");
    else setPage("login");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded-lg"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-lg"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Register
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          Sudah punya akun?{" "}
          <span
            className="text-blue-500 cursor-pointer"
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

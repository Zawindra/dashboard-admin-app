import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

const Login = ({ setPage }) => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (!success) setError("Username atau password salah!");
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          Belum punya akun?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setPage("register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
